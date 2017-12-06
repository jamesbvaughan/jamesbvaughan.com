---
title: Thoughts on Qutebrowser

discussion_links:
  - site_name: Hacker News
    url: https://news.ycombinator.com/item?id=15865787
  - site_name: Reddit
    url: https://www.reddit.com/r/linux/comments/7i1u7d/ive_been_using_qutebrowser_for_a_few_months_now/
---

I recently began using a web browser called
[Qutebrowser](https://qutebrowser.org/index.html).
I heard about it on Hacker News a while ago
and it caught my attention because it encouraged a
completely keyboard-based workflow.
I've been surprised at how much I've enjoyed using it and it may very well
become my primary web browser.
In this post, I will talk about how I got started with Qutebrowser,
what makes it unique, which of its features I love the most,
and what future features I'm most excited for.


## My Browser History

I've been using Google Chrome or Chromium for almost as long as I can remember.
My first introduction to the web was through Microsoft's Internet Explorer on
my family's shared home computer running Windows 95.
When I was in Junior High, I discovered Firefox and quickly jumped on the
anti-IE bandwagon, although at the time, I didn't really understand _why_
everyone hated IE.
In 8th grade, I heard about Google Chrome and became instantly infatuated with
it's sleek look and claims of performance gains.
I continued using it throughout high school until I started running Linux and
switched to Chromium since it seemed to be more trendy in the open-source
community.

Since first using Chrome/Chromium,
I've tried about a half dozen other browsers,
but never for more than a few days.
I'm always excited to try out new things, and with how central my web browser is
to my daily life, I'm interested in finding the most optimal one for my
personal workflow, but I never found one that could match Chromium in speed,
extensibility, reliability, and features.

A feature that is important to me is support powerful and flexible custom
keybindings.
I've tried to move as much of my work from my mouse to my keyboard as possible,
and almost all of my time on my computer is spent either in a terminal or in a
web browser.
With Chromium + Vimium/cVim, I was able to get pretty close to
being fully keyboard based, but while Vimium and cVim are great extensions,
they are still just _extensions_, extending a tool that was designed to be used with
a mouse.
There are a lot of essential (for me) features that they are not capable of
implementing because of Chromium's limitations on what extensions are allowed
to do.


## Enter Qutebrowser

Qutebrowser describes itself as "a keyboard-focused browser with a minimal GUI".
It has vi-inspired modes and keybindings for interacting with both the browser
itself and the webpages that you are browsing.
It's possible to do just about everything you ever need to do in a web browser
without touching the mouse/trackpad in Qutebrowser.
Like I mentioned, I am a huge fan of keyboard-based workflows,
so this immediately caught my attention when I first discovered Qutebrowser a
few months ago.

Since trying it out for the first time, I've been using it almost exclusively.
There are a lot of things that I really love about Qutebrowser and
I will cover the ones that are most important to me in the following sections.

#### The Keybindings
A primary focus of Qutebrowser is a completely keyboard-focused workflow.
The default keybindings are quite nice, in my opinion.
There is [a helpful cheatsheet](https://qutebrowser.org/img/cheatsheet-big.png)
that came in handy when I was getting started, but the most common bindings
got baked in to my muscle memory surprisingly quickly.
The defaults, many of which are taken from
[dwb](https://github.com/yzzyx/dwb), start to feel natural very quickly if you
have prior experience with vi-style navigation.

#### The Command Completion Is Indispensable
Most interactions with Qutebrowser are done through commands entered in the
status bar.
From the status bar, you can change settings, open, close, and navigate tabs,
store and load bookmarks, spawn programs, and more.
Almost all commands have a completion feature that will feel very familiar if
you have ever used tools like dmenu or rofi.
It's difficult to convey just how useful the completion is and how efficient it
feels to use.
With just a few keystrokes, I can open any page in my history,
list my bookmarks and open one, or look up the description of a configuration
option and change its value.

Chromium has a similar feature built into it's omnibox for opening pages,
but it can be difficult to open a specific page that you have in mind with it
and it is not nearly as flexible as the commands and completion in Qutebrowser.

#### It's A Great Open Source Project
This isn't often something that I put a lot of weight on when I am evaluating
software for personal use, but the aspects of Qutebrowser as an open-source
project that go beyond the browser itself and the community around it have made
an impression on me that I think is worth mentioning.

The maintainer and open-source contributors have done an excellent job of
managing the project, compared to other open-source projects that I use.
A few things that have stood out to me:
 - [Actually maintaining a thorough changelog on the GitHub releases page](https://github.com/qutebrowser/qutebrowser/releases)
 - Responding quickly and positively to questions from users on GitHub and IRC
 - [Including screenshots on the project website](https://qutebrowser.org/index.html)
 - [Listing in the FAQ the project's advantages and disadvantages compared to alternatives](https://qutebrowser.org/doc/faq.html)
 - [Covering all the basics in the project README](https://github.com/qutebrowser/qutebrowser)
 - Keeping up-to-date documentation of [commands](https://qutebrowser.org/doc/help/commands.html) and [configuration settings](https://qutebrowser.org/doc/help/settings.html)

Some of these are more common than others when it comes to open-source projects,
but for me they all really add to the amount of happiness I experience when I
use Qutebrowser.

#### It Is Great At Rendering Websites
This is one of the main things that a web browser is all about, isn't it?
Qutebrowser does an excellent job of displaying websites, just as excellent
as Chromium.
In fact, it's _exactly_ as excellent as Chromium because both Qutebrowser
and Chrome/Chromium use
[Google's Blink rendering engine](https://www.chromium.org/blink),
so websites should look identical in the two browsers.
This also means that you'll have access to the webinspector and some of the
`chrome://` pages that you may be used to using in Chromium.

#### Quickmarks Are Awesome
When using Chromium, a common sequence of keypresses for me was:
```
<Ctrl-t>f<Enter>
```
I would bet that many of you are familiar with that sequence and know exactly
what happens when I enter it.
It opens a new tab and places keyboard focus in the omnibox,
then it highlights a URL from my history based on some algorithm that seems to
take into account the frequency and recency of my visits to that site,
and then it navigates to that site (in my case, Facebook).
This sequence has become muscle memory for me and I often don't even think about
it when I enter it (which is an interesting/frightening phenomenon that deserves
a separate post someday).
There is a small handful of websites for which these quick sequences reliably
get me to the sites I want to get to in Chromium,
but the algorithm that it uses is a mystery to me and often results in very
different sites than what I'm looking for.

Qutebrowser captures similar (and in my opinion, superior)
functionality through quickmarks.
Quickmarks are URLs that take priority over all other URLs in your history
when completing URLs with the `open` command.
They are identified by strings that you as a user set explicitly.
For example, I have the string `fb` to identify `https://facebook.com`.
This means that I can type `ohn<Enter>`
to open up Hacker News, or `Ofb<Enter>`
to open Facebook in a new tab.
After using quickmarks for over a month now, I find them even more convenient
than Chromium's omnibox completions, because I like using `o` and `O` more than
`<Ctrl-l>` and `<Ctrl-t>` and also because I have full control over the
quickmarks that are set.


## Potential Improvements
I am using Qutebrowser as my primary web browser now,
and I really do like it a lot more than Chromium,
but it's not quite perfect yet
and there are a few specific things that I miss from Chromium.

#### Form Autocomplete
One feature of Chromium that I took for granted while I was using it is
autocompletion in forms.
In Chromium, I rarely had to manually type my whole address, email address,
phone number, name, or even my credit card number,
because I have given Google all of that information
and the browser would autocomplete the form I was editing with it.
Qutebrowser currently does not autocomplete forms.
This hasn't been a big issue, but it would be a nice convenience to have.

#### Built-in Password Manager With Autofill
This is related to the autocomplete issue,
but I really miss having my passwords saved and autofilled on websites that
I have to log in to frequently.
This is a commonly requested feature and you can find discussion of it
[here](https://github.com/qutebrowser/qutebrowser/issues/180).

#### Notifications
Web notifications seem to be a bit of a controversial topic among some people,
but I really like them.
Qutebrowser (with QtWebEngine) does not support notifications yet.

#### PDF Reader
Ever since I started using Chromium,
I had been using it as a PDF reader as well as a web browser.
It was super convenient to be able to click a link to a PDF and have it open up
in a new tab, just like a website.
Qutebrowser doesn't have a built in PDF reader.
[PDF.js](https://mozilla.github.io/pdf.js/) works well in it,
but with QtWebEngine, downloaded PDFs can't be opened automatically.
I believe that this is being actively worked on,
and [it should be solved soon](https://github.com/qutebrowser/qutebrowser/issues/2330),
but for the time being it is a bit of an inconvenience.
For now, I've ben going back and forth between using PDF.js in Qutebrowser,
and using [zathura]().

#### Cloud Sync
In Chromium, I have the option to give Google all of my settings, my theme,
my bookmarks, and my saved passwords and have them all synchronized
across all my devices.
Qutebrowser doesn't have a cloud sync feature like that, but it does use a
configuration file that I now include in my dotfiles git repository.
This gets the job done (and is actually preferable for me) when it comes to
keeping configuration in sync between machines, but version controlling my
quickmarks and bookmarks and trying to keep them in sync between machines is
a bit less convenient.
This isn't a feature that I think Qutebrowser needs to add, but it is something
that I miss sometimes from Chromium.


## Final Thoughts
I had been feeling a desire to detach myself from dependence on the Google
ecosystem for a while, but didn't think I could actually ever do it because
the convenience of Google products had always been too great for me to switch to
anything else.
The fact that I genuinely prefer Qutebrowser to Chromium is a huge surprise for
me and has sparked a transition away from other Google products as well.
(Drive/Photos -> Nextcloud, Google Search -> DuckDuckGo, etc.)
So far I haven't committed to those others as fully as I have with Qutebrowser,
but it has been fun exploring some of the other options that are out there.

I know that I focused my comparisons on Chromium throughout this post, and that
is because it is what I am most familiar with, but I don't expect that my
opinions would change too much if I were comparing Firefox/Safari/Edge/etc to
Qutebrowser instead of Chromium.
(The [FAQ](https://qutebrowser.org/doc/faq.html) has nice explanations of some
reasons to choose Qutebrowser over others.)

I hope that this post was helpful for anyone looking to learn more about
Qutebrowser.
If you found any of this intriguing, you should install it and give it a try!
