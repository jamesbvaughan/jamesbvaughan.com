---
title: Writing a Note Taking Tool in Python

categories:
  - tech
tags:
  - python
  - guide

draft: true
---

I often find myself needing to take quick and simple notes on my computer.
There are plenty of desktop tools out there for note taking, but I often
prefer a simple text editor and text files.
If the notes are related to a class or a project I'm working on,
there's a good chance that I already have a directory somewhere in my
filesystem for that class or project and I'll create a `notes.txt` or
`scratchpad.txt` in that directory.

This works well a lot of the time, but lately I've found myself needing
to take notes on something more miscellaneous.
This could be a talk that I'm listening to, a conversation I'm having,
or just random thoughts buzzing around my head.
Fore a long time, I would just quickly open a file in whatever folder
the nearest terminal was in (`vim asdf`).
More recently, I created `~/junk`, where I put anything that doesn't have
a better place to go.
This directory usually fills up quickly with text files, PDFs, or things
like `test.js`, `test.py`, `test.hs`, etc for when I am just playing with
a new programming idea.
I have to clean out `~/junk` every 1-2 weeks to keep it from getting
overwhelmingly full.

This solution is alright, but I really wanted some way to keep an archive
of the random things I need to write down every day.
Ideally, this would just be a single command that I could run that would
open up the current day's notes, with options to access any previous
day's notes and to search through the while archive.
As I spent time thinking about this idea, I decided that it sounded like
something I could build, and might actually be something that I would use
regularly if I built it well.

In this post, I'll walk through my process of building this tool, which
I am calling `scratchpad`.
This isn't a super technical writeup, nor is it a tutorial; rather,
it's a peek into the way I approached this problem, my general workflow,
and the evolution of the code.
My hope is that this post will be helpful for someone who is new to
coding or new to Python and will provide some insight into *one* way to
approach a problem like this.

## Design Decisions

The first thing I did was think about what features I wanted in this tool.
The primary use case would simply be to quickly edit the current day's
notes, and nothing more.
I wanted it to store the notes in `<scratchpad_dir>/2017/2/27/scratch.txt`
(where `<scratchpad_dir>` is configurable by the user)
or something similar, and edit them in the user's text editor of choice.

At first I planned to write this in Bash, since it's well-suited for
something like this, but I've been looking for more excuses to improve my
Python skills, so I decided to go with Python.

## First Steps

When working on a project like this, I like to start with the most basic
piece possible and work my way up from there.
For this project and my current skill level, that meant writing a Python
program that just opens up Vim.

After some a couple of Google searches, I learned about the `run` function
in Python's subprocess module.
Basically, `run` takes an array of strings that, combined, make up a
complete string that you would run in a shell to execute a program, and it
executes that.
For example, running `run(['ls', '-a'])` would print out all the
contents of the current directory.

{% highlight python %}
#!/usr/bin/env python
from subprocess import run

def main():
    run(['vim'])

if __name__ == "__main__":
    main()
{% endhighlight %}

And it works! This is also the stage where I initialize a git repository
and start to commit my changes so that I can have a record of the project's
history.

## Opening the File
Next, I wanted it to actually open up a file in today's
directory. To do this, I needed to call
`run(['vim', '2017/2/27/scratch.txt'])`
where `2017/2/27` is the current date.
I broke this down into 3 subproblems:
 - Getting the current date
 - Construct the file path for the current day's notes
 - Creating the file's directory if it doesn't already exist

To get the current date, I first Googled "current date python" and found
out that the function `date.today()` in the `datetime` module does just
what I needed.

To construct the file path, I needed to create a string from the current
year, month, and day.
I read that the `date` object has string attributes `year`, `month`,
and `day` which are exactly what I needed to to this.
Just before I closed the browser tab with the `datetime` docs, I noticed
that `date` objects have a method `strftime(format)` that converts the
date into a string in the format specified by `format`.
Because paths are represented as strings, I could use this function to
construct the path and not even have to use the `year`, `month`, and `day`
attributes.

In order to check to see if the file's directory exists, and create it if
it doesn't, I Googled "create a directory if it doesn't exist python"
and got lucky because the first result was
[this Stack Overflow post](http://stackoverflow.com/questions/273192/how-to-check-if-a-directory-exists-and-create-it-if-necessary)
that showed me exactly what I was looking for.


