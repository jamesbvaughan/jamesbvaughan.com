---
title: How to Create a Simple Component with Elm
date: "2018-12-12"
draft: true
---

Elm is a purely functional programming language that is used to create robust
web apps.
It compiles to JavaScript for use in web browsers,
but it looks a lot more like Haskell than JavaScript.
Elm provides a nice type system and a great compiler,
which can, at compile-time,
help developers catch many bugs that would otherwise manifest as runtime
exceptions in JavaScript.
Elm can be used to create entire web apps,
or individual components within a larger site or app.

(_When I use the word "component" in this post, I'm just talking about a
small, self-contained part of a web page, not necessarily something that
resembles a React component._)

In this post, I will describe how to create a simple component with Elm.
The behavior of the Elm component on that page is fairly straightforward:
on pageload, it fetches the URL of a random cat image.
If fetching the image URL is successful, it displays the image;
otherwise, it displays an error message.

## Outline

This guide is broken down into the following sections:

1. [Installing Elm](#installing-elm)
2. [Start A New Elm Project](#start-a-new-elm-project)
3. [Writing The Component](#writing-the-component)

If anything in this guide is confusing or unclear, please let me know!
In the meantime,
[the official Elm guide](https://guide.elm-lang.org)
is really good and you can probably find what you need in there to help you get
unblocked.

## Installing Elm

On most systems, you can install Elm with `npm` (or `yarn`):

```bash
$ npm install --global elm
```

(If you're on Windows, you can find an installer
[here](https://guide.elm-lang.org/install.html).)

## Start A New Elm Projects

You can start an Elm project by creating a directory for it to live in and
running `elm init`:

```bash
$ mkdir my-elm-project
$ cd my-elm-project
$ elm init
```

This will ask you if you want it to create a file `elm.json` for you.
Press enter to confirm that you do.
Now we're ready to start writing some code!

# todo: move this

```bash
$ elm install elm/json
$ elm install elm/http
```

to add `elm/json` as a direct dependency

## Writing The Component

Open up a new file `src/Main.elm` in your text editor of choice.
There is a bit of boilerplate required in order to get a simple
"Hello, World" style component up and running:

```

