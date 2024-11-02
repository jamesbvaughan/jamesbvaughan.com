---
title: The smallest (useful) HTTP responses possible
date: "2024-11-02"
---

I recently did a little experiment to see how small (in bytes) I could make
useful valid HTTP responses for a particular use case.

# Background

On [my homepage](/), I have a little feature where I display the names of the
last song I listened to and the last movie I watched.
I've implemented that via a bit of JavaScript that fetches that information from
a pair of Lambda functions that make requests to [Last.fm](https://last.fm) and
[Letterboxd](https://letterboxd.com).

I use that client script as a place to play some [code
golf](https://en.wikipedia.org/wiki/Code_golf) with myself, trying
to achieve the functionality with as few JavaScript tokens as possible.[^1]
Every few months, I think of a way to shrink it further.
Here's what I've got as of the writing of this post
([source](https://github.com/jamesbvaughan/jamesbvaughan.com/blob/4110cee912b8646f94111085aa0a563b8652d1ec/content/_index.md?plain=1#L53-L58)):

<!-- prettier-ignore-start -->
```html
...listening to music<span id="song"></span>,
watching movies<span id="movie"></span>...

<script>
  [song, movie].forEach(async (element) => {
    const response = await fetch(`/.netlify/functions/${element.id}`);
    if (response.ok) element.innerHTML = ` (${(await response.text()).trim()})`;
  });
</script>
```
<!-- prettier-ignore-end -->

The responses from the Lambda functions ([source](https://github.com/jamesbvaughan/jamesbvaughan.com/blob/4110cee912b8646f94111085aa0a563b8652d1ec/netlify/functions/song.ts)) look like this:

<!-- prettier-ignore-start -->
```html
the last song I listened to was
<a href="https://www.last.fm/user/magicjamesv">
  Nonagon Infinity by King Gizzard & The Lizard Wizard
</a>
```
<!-- prettier-ignore-end -->

This makes it trivial to shove them into the page without having to parse or
modify them.

# Going smaller

That script is pretty small in terms of JavaScript tokens, but we can go
smaller!
As of this post, I have two ideas:

## Combine the Lambda functions

I could combine the two Lambda functions into a single one that returns markup
for replacing the entire paragraph.

With that change, the client script look something like this:

```html
<p id="paragraph"><!-- The whole original paragraph --></p>

<script>
  const response = await fetch(`/.netlify/functions/combined`);
  if (response.ok) paragraph.innerHTML = await response.text();
</script>
```

I don't really want to do this for a couple reasons:

1. I don't want to move or copy the main text of that paragraph into the Lambda
   function.
2. I want this to continue being able to half-work. With my current
   implementation, if something goes wrong with one of the requests, the other
   can still work.

## Remove the second async call

The script currently has two async calls: `fetch()` and `response.text()`.
The first one resolves once the HTTP response's headers have been received and
the second resolves once the body has been received.

The `fetch()` will be difficult-to-impossible to remove, but the
`response.text()` one is a bit more avoidable!
My first thought was to put my response data in an HTTP response header, but
then I realized I could go further and extend my code golfing to the HTTP
response itself, putting the data directly into the status text.

After some experimentation and iteration, I got this minimal demo working:

```javascript
import { createServer } from "net";

const data = "Hello World";

createServer((socket) => {
  socket.write(`HTTP/1.0 204 ${data}\r\n\r\n`);
}).listen(3003);
```

There are a few things going on there:

1. I'm using `createServer` and writing to a socket so that I can have more
   control over the bytes in the response.
2. I'm using HTTP 1.0 because clients automatically close the connection after
   two consecutive CRLFs without me having to explicitly send a
   `Connection: close` header like I'd need to with HTTP 1.1 or newer.
3. I'm using a `204` response code (the code for a `No Content` response)
   because clients won't try to wait for a response body when they see that
   code.

Here's how that looks when fetched via cURL:

```bash
$ curl -v "[::1]:3003"
*   Trying [::1]:3003...
* Connected to ::1 (::1) port 3003
> GET / HTTP/1.1
> Host: [::1]:3003
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
* HTTP 1.0, assume close after body
< HTTP/1.0 204 Hello World
<
* Closing connection
```

On the browser side, here's how I could make use of a response like this in my
homepage script:

```javascript
[song, movie].forEach(async (element) => {
  const { ok, statusText } = await fetch(`/.netlify/functions/${element.id}`);
  if (ok) element.innerHTML = ` (${statusText})`;
});
```

That's smaller!

I'm not actually using this technique on my homepage because I haven't found a
way to return HTTP 1.0 responses from Netlify Functions.
I could set up my own server to run this, but that's not _quite_ worth it to me
for this code shrinkage.

### Complete demo

Here's a more complete demonstration of this technique in a single JS file:

```javascript
// statusTextDemo.js
import { createServer } from "net";

createServer((socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    const [requestLine] = request.split("\r\n");
    const [_method, path] = requestLine.split(" ");

    if (path === "/") {
      const body = `
        <h1>HTTP response text demo</h1>
        <div id="result">Loading...</div>
        <script>
          fetch("/data").then(r => result.innerHTML = r.statusText)
        </script>
      `;
      socket.write("HTTP/1.0 200 OK\r\n");
      socket.write("Content-Type: text/html\r\n");
      socket.write(`Content-Length: ${body.length}\r\n`);
      socket.write("\r\n");
      socket.write(body);
    } else if (path === "/data") {
      const responseData = "It worked!";
      socket.write(`HTTP/1.0 204 ${responseData}\r\n\r\n`);
    } else {
      socket.write("HTTP/1.0 404 Not Found\r\n\r\n");
    }

    socket.end();
  });
}).listen(3003);
```

Copy that to a file, run it via your favorite JavaScript runtime, and open
`localhost:3003` in your browser. If you see "It worked!" then it worked!

# Going even smaller

There are at least a few ways that useful HTTP responses can be even smaller
than this:

1. Responses where the status code itself _is_ the useful data. In the right
   context, `HTTP 1.0 XXX` as the entire response (where `XXX` is any response
   code) can be useful.
2. [HTTP 0.9
   `Simple-Response`](https://www.w3.org/Protocols/HTTP/1.0/spec.html#Response),
   where no status line is required.

I'm not using those in these experiments because I do need more information than
just the status code and because [browsers have largely removed support for HTTP
0.9
responses](https://groups.google.com/a/chromium.org/g/blink-dev/c/OdKnpLlvVUo).

[^1]:
    Don't worry, this is just a fun challenge for myself and is not how I
    typically code.
