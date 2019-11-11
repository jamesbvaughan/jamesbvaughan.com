---
title: HTTP
---

HTTP, or "Hypertext Transfer Protocol", is one of the most common protocols
that computers use to talk to each other.

## Types of HTTP Requests

These requests come in a variety of forms:

- GET
- POST
- PUT
- DELETE
- etc.

These are all different kinds of "HTTP Requests" and each one is used for a
different purpose,
but we're just focus on GET for now.

### GET Requests

You use GET requests all the time and probably don't even realize it.
Almost every time you load a web page on your phone or computer,
your web browser sends an HTTP GET request to the server that serves the page
you want to see. This is what a simple GET request might look like:

```HTTP
GET /index.html HTTP/1.1
Host: jamesbvaughan.com
```

Let's break this down.
The first line, `GET /index.html HTTP/1.1`,
contains the meat of the GET request.
The first word is the request type, in this case `GET`.
The next word is the path of the object that we want to get,
in this case it's my homepage, which is located at `/index.html`.
Finally, we have to specify the version of the HTTP specification that
we are using, in this case it's version `1.1`.

If you send that bit of text to my server at `jamesbvaughan.com`,
it will send back my website.
(To do this, you can use a tool like
[netcat](https://en.wikipedia.org/wiki/Netcat).)

Fortunately, web broswers are smart enough to put together the content of the
request for us when we type an address into the URL bar and hit enter.

Here's a typical response:

```HTTP
HTTP/1.1 200 OK
Content-Type: text/html
Date: Fri, 10 Aug 2018 22:59:32 GMT
Content-Length: 4116
Connection: Close

<!DOCTYPE html>
<html>
  <head>
    <title>James' website</title>
  </head>
  <body>
    ...
  </body>
</html>
```

Now let's break down the response.
The first line contains the HTTP version, and a status code,
in this case `200 OK` which indicates that the page was found and sent
successfully.
(Another common response code you've probably heard of is `404`,
which indicates that the requested object was not found on the server.)

After the response headers is a blank line and then the *response body*,
in this case a bunch of HTML that our web browsers render as a
(hopefully) beautiful web page.

The response body doesn't have to be HTML though;
it can be JSON, XML, or even just plain text.
When interacting with APIs, a JSON response body is common,
since most programming languages and frameworks have standardized ways to
deserialize JSON data.

### POST Requests

The next common type of request that you deal with when using the web is POST.
POST requests, by convention, are used for submitting data to some kind of
server. When you submit a form online, the data you entered into that form
is sent to the server in a POST request.

Here's an example of a typical POST request:

```HTTP
POST /signup HTTP/1.1
Host: facebook.com
Content-Type: application/x-www-form-urlencoded

username=james_is_cool&password=super_secret
```

As you can see, this request is pretty similar to a GET request,
but it has an extra part at the bottom. 
This is called the *body* of the request and must be separated from the
request *headers* by a blank line.
The header `Content-Type: application/x-www-form-urlencoded`
tells the server how the POST request body is encoded.
Another common way to encode data in a POST request is JSON.
In this example the body contains a username and password.

## How to programs use HTTP?

Two of the most common types of computer programs to use HTTP are web browsers
and web servers.

I'm going to assume that you're fairly familiar with web browsers.

A web server can be anything from a tiny 10 line program that does one thing
to a giant program with millions of lines of code that make up the back end of
a big app.

A web server listens on a certain port (usually port 80 for HTTP) until it gets
a request from a client.
When it gets a request, it begins reading it character by character in order
to determine what it needs to do.
This is why the request type (GET, POST, etc.) and path ("/", "/blog.html",
"login", etc.) come first;
they are usually the most important bits of data for deciding what needs to be
done with the request.

Fortunately for us, people have written frameworks and libraries in most
popular programming languages for dealing with these requests so that we don't
**really** need to know all the low-level details.

For example, this is all the code you'd need to write to have a working
Node.js webserver that can handle a simple request using the
[express](http://expressjs.com/) library:

```javascript
const app = require('express')()

app.get('/example-path', (request, response) => {
  response.send('example response')
})

app.listen(80)
```

As you may have guessed,
this server waits for a GET request to the path `/example-path`
and then sends back the text `example response`.

Handling a POST request is a bit more complex, but similar:

```javascript
const bodyParser = require('body-parser')

app.use(bodyParser.json()); // for parsing application/json

app.post('/add-book', (request, response) => {
  const title = request.body.title
  const author = request.body.author
  
  // this is where you would do something interesting with the data
  addBook(title, author)
  
  response.redirect('/success')
})

app.get('/success', (request, response) => {
  response.send('submitted book successfully')
})
```

In this example, we have to add two lines of code that tell express
how to parse the body of a POST request containing JSON data.

In the body of the request handler, we can access the POST request data inside
the `request.body` variable.
Next, we call the `addBook` function which presumably adds a new book to some
database.
Finally, we redirect the user to another path (`/success`) which contains a
message indicating that the book was submitted successfully.

Here is a similar example in Python using the
[Flask](https://github.com/pallets/flask/) library:

```python
from flask import (Flask, request, redirect)

app = Flask(__name__)

@app.route('/add-book', methods=['POST'])
def addBookHandler():
    title = request.form['title']
    author = request.form['author']
    
    addBook(title, author)
    
    return redirect('/success')

@app.route('/success')
def success():
    return 'submitted book successfully'

app.run()
```

# Other helpful resources

- [Flask documentation](http://flask.pocoo.org/docs/1.0/quickstart/#redirects-and-errors)
- [How to use cURL to test APIs](http://www.codingpedia.org/ama/how-to-test-a-rest-api-from-command-line-with-curl/): cURL is a wonderful command line tool for working with HTTP requests and it comes in very handy when testing things.
- [Postman](https://www.getpostman.com/): This is (in some ways) a graphical and pretty alternative to cURL for testing HTTP requests.
- [HTTP on Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

---

I hope that helps!
