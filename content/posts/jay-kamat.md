---
title: "Open Source Students: Jay Kamat"
date: "2018-05-08"
footer: "oss-footer.html"
draft: true
---

This week's interview is featuring Jay Kamat
([jgkamat](https://github.com/jgkamat)).
Jay is a student studying Computer Science at Georgia Tech.
I first heard about Jay through his work on [qutebrowser](qutebrowser)
and was really impressed with how much work he had done on the browser and
with how welcoming and helpful he was in the Github issues and on IRC.
When I found out that he and I were the same age,
I thought he would be a perfect person to feature in this series.
He is currently involved with qutebrowser and a variety of projects in
the Emacs ecosystem.

## Interview

_Friday, April 13, 2018._

**James: When did you first get started coding?**

I actually started programming in high school,
almost at the very beginning of high school.
My dad taught me Java,
in supplement to a class at my high school which taught Java.
We had two classes: intro to Computer Science and AP Computer Science.
It's really interesting to learn it that early,
because I think that a lot of the structure that helps with learning
programming wasn't there yet.

I took those two classes and they were my very first introduction
to programming.
After that, I actually applied to college for aerospace engineering.
I wasn't really sure what I wanted to do at that point,
but I got to Georgia Tech and on the orientation day I talked with a bunch
of Computer Science people here and I really liked what they were doing,
so I switched to Computer Science immediately.

**How did you originally get involved in open source?**

This is kind of a complex answer because I didn't start contributing to 
open source until fairly recently.
I've only contributed to open source in college,
but I was enthusiastic about open source before college.
In high school I was trying to switch over to using all open source
applications,
and that actually turned out to be really helpful because now that I use
mostly open source software I can pretty much change anything that I want.
It's really liberating, compared to what it was like before.

Early in college, I joined a club called ?ROBOJACKET?,
which had a robotics team.
Their software is open source, so all of their development happens in the open,
and that became the first major open source project that I contributed to.

After that, I started to make tiny little contributions all over the place.
I didn't really have a single project that I contributed to until I
started contributing to qutebrowser,
which I've now contributed quite a lot to.

I didn't expect to become a top contributor to it.
I don't sit down and think,
"Oh, I'm going to to contribute to qutebrowser today."
I usually think,
"Oh, there's this bug"
or
"It would be really cool if this feature existed"
and I just add that feature.
I use qutebrowser every day and being able to change what you use every day
is really nice.

**How did you find out about qutebrowser in the first place?**

I first heard about qutebrowser about two years ago.
I actually dismissed it at the time because it was based on WebKit,
which crashed *a lot*.
I was fine with pages not rendering properly and stuff like that,
but I'm not fine with crashing.
Because of that, I stuck with
[Vimperator](http://vimperator.org/vimperator.html),
and similar extensions,
but now qutebrowser is relatively rock-solid,
so it's now usable as a daily-driver for me.

**I noticed that you use Emacs org-mode to make your personal website,
but qutebrowser, at least by default, has all Vim-style keybindings.
Where do you stand on the editor war?**

In my freshman year of college, I heard about Vim and spent a lot of time
learning it and really really liked it.
It just made me feel way more productive and I really hated constantly
moving my hand back and forth between the keyboard and mouse
and Vim cut that out completely.

At some point, I got kind of frustrated with Vim though because the plugins
were weighing down Vim to the point where it was almost unusable.
At that time there wasn't really good async support in Vim.

I heard that Emacs had this mode called evil-mode, which is a Vim
emulation mode in Emacs.
I tried it and really liked it.
I actually think that stock evil-mode is better than stock Vim in some ways.
Also, org-mode is really great.

One downside is that it takes a lot of time to set everything up.
If you don't have the time, I would recommend
[Spacemacs](http://spacemacs.org/).
It's a pretty good distribution.
It can be kind of intimidating, but it's a great distribution
for people who are coming from Vim.

**Do you find yourself spending a lot of time tweaking and configuring
things on your computer?**

Yeah, I probably spend way too much time configuring everything.
I probably spend more time configuring things than I spend actually working.
I like doing it because it's interesting and I think it makes working
a lot more fun.

**Which open source projects are you involved in now?**

qutebrowser is the project that I am most heavily involved with right now,
but I also do a significant amount of contribution to generic Emacs things;
I've contributed a little to org-mode and a bunch of other Emacs tools
and plugins.

I think of contributions like this as an extension of my dotfiles,
because whenever I configure things,
I would rather have them be public than just be in my dotfiles.

**Something that I see commonly in other programmers and CS students is
an interest in and desire to start contributing to open source,
but they see it as this advanced and intimidating thing that only
really experienced programmers can do.
What advice do you have for students who are in this boat and want to
getting involved with open source but don't know where to start?**

This is a great question because I was affected by that feeling as well
and I think that most people are.
Even if you've been contributing for a while,
it's easy to be worried or feel that you're not smart enough to understand
what's going on.
In practice though, I don't think that you should worry about those things
because the maintainers of open source software are usually really friendly
to beginners.
They know that people who are just getting started don't know much about the
workflow,
so if you make mistakes that's totally okay because everyone makes mistakes,
even the most experienced people.

What I would recommend for people who are just getting started is
to start off with little small contributions,
even if they are just documentation or typo fixes, and work your way up,
especially if they are new to programming.
It can be intimidating if you don't know enough about programming to
make a change.

Documentation fixes are really helpful for maintainers because they don't
actually look at the readme or the documentation that often,
and when they do, they don't look at it with the eyes of a new person.

One of the friendliest communities to get started in is the DuckDuckGo
community.
They are really nice and are a perfect place to start.
One cool thing you can work on for them is their
[instant answers](https://duck.co/ia).
These are things that DuckDuckGo will display above the search results
for certains queries.
One of the more popular types of instant answers is their cheatsheets.
If you type in something like "vim cheatsheet" to DuckDuckGo,
it will show you a Vim cheatsheet right there in the search results.
They have end-to-end tutorials for their entire contribution process.

## Recommended Readings

_I like to end each interview by asking the subject to recommend two articles,
books, videos, podcasts, etc. that made an impact on them recently.
These recommendations may be related to open source software, to software
engineering in general, or completely unrelated to computers._

My first link is from sircmpwn, the creator of
[sway](http://swaywm.org/),
and it's his blog post
[*Hack everything without fear*](https://sircmpwn.github.io/2018/03/17/Hack-everything-without-fear.html).
In it, he addresses the topic of being intimidated by large open source projects
and he explains why you shouldn't be too intimated and should just go for it.
I think his attitude about it is really great because he tries to make it
so that everything is up for grabs, which I like a lot.

My next one is more technical, but
it taught me a surprising amount about PyQt in a really short amount of time.
It's about PyQt memory management and it's called
[PyQt. How to shoot yourself in the foot.](http://enki-editor.org/2014/08/23/Pyqt_mem_mgmt.html).
I was completely new to memory management when I read it and learned a ton
about in in less than a page.
It's a little bit outdated now, unfortunately,
but still relevant if you want to contribute to PyQt.
