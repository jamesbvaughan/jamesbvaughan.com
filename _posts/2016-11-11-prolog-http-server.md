---
title: Writing an HTTP server in Prolog
redirect_from: /writing-an-http-server-in-prolog/

discussion_links:
  - site_name: Hacker News
    url: https://news.ycombinator.com/item?id=12940615
  - site_name: Reddit
    url: https://www.reddit.com/r/programming/comments/5cmwke/writing_an_http_server_in_prolog/
---

I'm taking a class now on programming languages where I'm learning all about
the different styles of languages and how they can all be useful, as well as a
class on computer networks where I'm learning all about how the internet works
and how computers communicate with each other across networks. I had the idea
last week to try to combine what I'm learning in the two classes and implement
one of my networking assignments with the new languages I'm learning in my
programming languages class, Prolog. In this post I'll talk about why I chose
to do this, how I did it, some of the problems I ran into along the way, and
what I learned through the process.


For the past couple weeks in the
programming languages class we've been focusing on logic programming and
Prolog. In case you haven't heard of logic programming (I hadn't), it's a kind
of programming that encourages a totally different way to think about writing
programs and solving problems than what most programmers today are used to. The
language we are using to learn about logic programming, Prolog, is built on two
pretty basic kinds of statements: facts and rules. A fact is something that's
always true, and a rule is something that is true if a set of conditions (which
are just more facts and rules) are all true. The basic way you use Prolog is by
giving it some facts and rules and then asking it questions. This seemed so
strange and different to me at first that I couldn't imagine Prolog ever being
a practical choice for a project.


I'm not going to go too far into how Prolog works, partly because that's not
what this post is about, and partly because Bernardo Pires has
[a great blog post](https://bernardopires.com/2013/10/try-logic-programming-a-gentle-introduction-to-prolog/)
that gives a nice introduction to the language.


In my networking class
I've studied all kinds of networks and protocols in it and it's been really
cool to actually start understanding how all of our devices communicate
efficiently with each other. My last assignment was to write a simple HTTP
server in C++, something that would have sounded crazy to me a year ago, but
it's actually not nearly as complicated as I thought it would be!


## Meet Sockets

The bulk of the server centered around just a few functions
that are part of the Berkeley sockets API: `socket()`, `bind()`, `listen()`,
and `accept()`. (There are more but these are the main four that were relevant
to this simple server.) Julia Evans has
[some pretty cool illustrations](https://twitter.com/b0rk/status/797235796399058944)
on this kind of stuff that you should check out. What's awesome is that these
functions are actually fairly simple to understand:

 - `socket()` creates and gives you a new socket, which is a thing that your OS
 uses to communicate with other computers.
 - `bind()` gives your socket an address that's somewhat analogous to a street
 address; it gives other computers a place to connect to.
 - `listen()` tells your OS to start listening for things that want to connect
 to your socket.
 - `accept()` accepts a connection on your socket and gives you a new socket
 that you can use to communicate with whatever connected to your original
 socket. This is often a web browser like Chrome/Firefox/Safari, some other HTTP
 client, or really any kind of program that needs to communicate with other
 programs over a network.

See, there's not that much to it! Once you've
got a connection established to another computer through a socket, you can
pretty much treat that socket just like a file and use the `read()` and
`write()` system calls to communicate.  Pretty cool, right? What's even cooler
is that these functions exist and work pretty much the same way in a bunch of
different languages, even Prolog!

At the same time that I was working on
the HTTP server for my networking class, I was working on a Prolog project for
my programming languages class and stumbled across these same socket
programming functions (well, predicates in Prolog, not functions) in the GNU
Prolog documentation.  This got me pretty excited because I actually knew what
they were! By this time, I was actually starting to warm up to Prolog, so after
I finished the two assignments, I decided that it would be fun to try to
combine them and write my own simple HTTP server in Prolog.


## Getting Started

The first step was to decide how much functionality I wanted
this server to have.  Should it thoroughly implement HTTP/1.1?  Should it do
nothing but send a few bytes to every client that connects to it?

Because I didn't want to spend more than a couple of days on this project,
but still wanted it to make it somewhat complete, I decided on something in
between: It would be able to accept a connection from a client, read in and
parse an HTTP request, find the requested file, construct a valid HTTP
response, send it back to the client, and close the connection.


### Requests and Responses

The first thing I chose to implement was
a set of rules for parsing HTTP requests and constructing HTTP responses, which
are both essentially just strings with information about what's being sent from
one program to another. I tried to make these rules as simple as possible and
do the bare minimum amount of work to do what I needed. For the requests, that
meant doing nothing but extracting the path to the requested file so that we
know what to send back to the client.

{% gist jamesbvaughan/8dc874ae215be79649d4d9c1c00dcfa5 %}

This code may look strange at first, but what's going on is very simple.
Basically, it's saying `parse_request(Request, Path)` is true if `Path` is the
path requested in `Request`. The first line of an HTTP request is in the format
"GET /path/to/some/file.html HTTP/1.1", (where "1.1" is whatever HTTP version
is being used) so `parse_request` is just saying that `Path` is the bit of the
request that comes after "GET /" and before " HTTP/". Pretty simple, right? Now
on to the responses.

{% gist jamesbvaughan/a1614d08b6a2bc8c5a3e28377737fa45 %}

Here, you can see `construct_response(Body, Response)` putting together an
HTTP response by concatenating the status line, "HTTP/1.0 200 OK\r\n", one
header, and the given body of the response into `Response`. For this simple
server, we're only implementing one response status code, 200, but there are
tons of other ones for indicating all kinds of things. If I were to add support
for more status codes, this is where I'd do it.


### Reading Files (and Requests) in Prolog

The next thing I needed to learn about was
reading files in Prolog. I've done this in other languages before, so I had a
basic idea of what needed to happen, but wasn't sure if it would work the same
way in Prolog. To find out, I went to the list of built-in predicates in GNU
Prolog and Ctrl-F'd for "open". I was happy to find a built-in `open()`
predicate that works just like the Unix system call by the same name. The
tricky part was reading in the contents of the file. Like in functional
programming languages, the concept of a loop just doesn't make sense in Prolog,
so I knew that there would need to be some recursion involved here and
eventually arrived at this code for reading the contents of the file:

{% gist jamesbvaughan/f3ae93449fed11320036240a6ca07ecd %}

After `read_file` opens the file at `Path`, it jumps into the recursive rule
`read_file_helper`, which continually reads in and concatenates bytes to the
file contents until it reaches the end of the file. I recalled from my
networking class that socket I/O is very similar to file I/O in most languages,
and was happy to learn that Prolog is no exception.  My rule for reading in
HTTP requests from the client is almost identical to my rule for reading files,
except that HTTP requests end in two carriage-return line-feeds, rather than an
end-of-file.

{% gist jamesbvaughan/7e78b2d674e6e6ba9751af4144eb876b %}

I'm using two new ideas here in `read_request`. The first is naming my
request reading rule and its recursive helper the same thing. I'm allowed to do
this here because the two have different arity. They are conventionally
referred to as "read_request/2" and "read_request/3", respectively. The second
thing is the underscore in place the `Stream` variable and the request prefix
in the second definition.  The underscore here says that I don't care what is
in those places. I don't need to use the socket stream here and I don't care
what comes before the carriage-return line-feeds in the request, so they're
replaced with underscores.  Note that the underscore has a special meaning in
Prolog because it doesn't require that they are equivalent.


### Putting it all together

With these helpers defined I was able to start on the
main rule for running the server. This is where we get to use those standard
socket interfaces I mentioned earlier.

{% gist jamesbvaughan/87c1732213d894def8ad3aa4e972e094 %}

In the first three lines here we're creating a new socket and binding it to
`localhost:3000`. Then it starts listening at that address and lets the user
know. I added the `flush_output` line because I was having some problems with
the message not being written right away. Next, `socket_accept` waits for a
client to connect and creates input and output streams that let us read from
and write to the client connected at that socket. After that my helper rules
read and parse the request and then get the requested file and construct an
HTTP response to be sent to the client. Once all of that is finished, the
socket is closed.

## Problems

For the most part, this was a
generally frustration-free project, but there were a few challenging points
that slowed me down along the way.

The main problem I ran into was that
while testing the server, I would often get an error when I tried to run it,
saying that the address was already in use. This confused me for a while
because I wasn't getting it consistently, and I knew I wasn't running any other
servers on my machine on that port. After a bit of digging, I found an option
that's available in most implementations of socket interfaces that tells the OS
to let other processes re-use the requested address. This option wasn't being
set when I called `socket_bind`, and the GNU Prolog documentation didn't seem
to indicate a way to do so.

To the source code! The next logical step,
after Googling the problem without much success, was to go to the GNU Prolog
source code and see how `socket_bind` was implemented and maybe find an
undocumented way to set that address reuse flag. To my surprise, I found that
it *was* being set, right there in the source code where I could see it.
But if it was being set, then where was my problem coming from? I quickly
learned that the address reuse flag was a relatively recent addition to the GNU
Prolog source and hasn't yet been included in a stable release. This was a
bummer for me, but I was happy to have gotten to the root of the problem.


## Conclusion

That's it! A super basic HTTP server in Prolog. It
doesn't fully implement HTTP 1.0 or even support multiple connections, and It's
certainly not going to replace any of the servers that I use for my projects
any time soon, but it was a lot of fun to write and I feel like I have a better
understanding of socket programming and Prolog after writing it.

This
address reuse flag problem was a bummer, but it felt really cool to figure out
the reason for the issue by digging into the language's source. If I were to
redo this project, I would use SWI Prolog, which seems to be more actively
maintained and has a socket interface that gives users that option to set that
address reuse flag.

This post was partly inspired by a lot of
[Julia Evans](https://jvns.ca/)'
recent posts, which are all super cool
and you should check them out. You can read
[the full source code on Github](https://github.com/jamesbvaughan/httppl).
I'm still very new to both socket programming and to Prolog, so
feel free to let me know if there's anything I could have done differently!
