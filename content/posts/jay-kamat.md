---
title: Jay Kamat
date: 2018-05-08
post_series: Open Source Students

footer: oss-footer.html
---

This week's interview features Jay Kamat
([jgkamat](https://github.com/jgkamat)),
a Computer Science student at Georgia Tech.
I first found Jay through his work on [qutebrowser](/qutebrowser)
and was impressed with how much work he had done on the browser and
with how welcoming and helpful he was in the Github issues and on IRC.
When I found out that he is the same age as me,
I thought he would be a perfect person to feature in this series.

## Interview

_Friday, April 13, 2018._

**James: Your first activity on Github was back in 2014, but
when did you first get started coding?**

"I actually started programming in high school.
We had two classes at my school:
intro to Computer Science and AP Computer Science.
I took those two classes and they were my very first introduction
to programming.

"After that, I actually applied to college for aerospace engineering.
I wasn't really sure what I wanted to do at that point,
but at my orientation I talked with a bunch
of computer science students and I really liked what they were doing,
so I switched to CS immediately."

**How did you originally get involved in open source?**

"This is kind of a complex answer because I didn't start contributing to 
open source until fairly recently.

"I've only contributed to open source in college,
but I was enthusiastic about open source before college.
In high school I was trying to switch over to using all open source
applications,
and that turned out to be really helpful because now that I use
mostly open source software I can pretty much change anything that I want.
It's really liberating.

"Early in college, I joined a club called
[RoboJackets](https://robojackets.org/),
which had a robotics team.
Their software is open source, so all of their development happens in the open,
and that became the first major open source project that I contributed to.

"After that, I started to make tiny little contributions all over the place.
I didn't really have a single project that I contributed to until I
started contributing to qutebrowser,
which I've now contributed quite a lot to.

"I didn't expect to become a top contributor to it.
I don't sit down and think,
"Oh, I'm going to to contribute to qutebrowser today."
I usually think,
"Oh, there's this bug"
or
"It would be really cool if this feature existed"
and I work on adding that feature.
I use qutebrowser every day and being able to change what you use every day
is really nice."

**How did you find out about qutebrowser in the first place?**

"I first heard about qutebrowser about two years ago.
I actually dismissed it at the time because it was based on WebKit,
which crashed *a lot*.
I was fine with pages not rendering properly and stuff like that,
but I'm not fine with crashing.
Because of that, I stuck with
[Vimperator](http://vimperator.org/vimperator.html),
and similar extensions,
but now qutebrowser is relatively rock-solid,
so it's now usable as a daily-driver for me."

**I noticed that you use Emacs org-mode to make your personal website,
but qutebrowser, at least by default, has all Vim-style keybindings.
Where do you stand on the editor war?**

"In my freshman year of college, I heard about Vim and spent a lot of time
learning it and really really liked it.
It just made me feel way more productive.
I really didn't like constantly
moving my hand back and forth between the keyboard and mouse
and Vim cut that out completely.

"At some point, I got kind of frustrated with Vim because
there wasn't good async support in Vim at that time and
the plugins were weighing it down to the point that it was almost unusable.

"I heard that Emacs had this mode called
[evil-mode](https://github.com/emacs-evil/evil),
which is a Vim emulation mode in Emacs.
I tried it and really liked it.
I actually think that stock evil-mode is better than stock Vim in some ways.
Also, org-mode is really great.

"One downside is that it takes a lot of time to set everything up.
If you don't have the time, I would recommend
[Spacemacs](http://spacemacs.org/).
It's a pretty good distribution.
It can be kind of intimidating, but it's great
for people who are coming from Vim."

**Which open source projects are you involved in now?**

"Qutebrowser is the project that I am most heavily involved with right now,
but I also do a significant amount of contribution to various Emacs things.
I've contributed a little to org-mode and a bunch of other Emacs tools
and plugins.

"I think of contributions like this as an extension of my dotfiles,
because whenever I configure things,
I would rather have them be public than just be in my dotfiles."

**Something that I see commonly in other programmers and CS students is
an interest in and desire to start contributing to open source,
but they see it as this advanced and intimidating thing that only
really experienced programmers can do.
What advice do you have for students who are in this boat and want to
getting involved with open source but don't know where to start?**

"This is a great question because I was affected by that feeling as well
and I think that most people are.
Even if you've been contributing for a while,
it's easy to be worried or feel that you're not smart enough to understand
what's going on with the code.
In practice though, I don't think that you should worry about those things
because the maintainers of open source software are usually really friendly
to beginners.
They know that people who are just getting started don't know much about the
workflow,
so if you make mistakes that's totally okay because everyone makes mistakes,
even the most experienced people.

"What I would recommend for people who are just getting started is
to start off with little small contributions,
even if they are just documentation or typo fixes, and work your way up,
especially if they are new to programming.
It can be intimidating to dive in to the code
if you don't know enough about programming to
make a change.

"Documentation fixes are really helpful for maintainers because they often don't
actually look at the readme or the documentation very much,
and when they do, they don't look at it with the eyes of someone who is new
to the project and actually needs the documentation."

**Do you have any specific suggestions for places to get started?**

"One of the friendliest communities to get started in is the DuckDuckGo
community.
They are really nice and are a perfect place to start.
One cool thing you can work on for them is their
[instant answers](https://duck.co/ia).
These are things that DuckDuckGo will display above the search results
for certain searches.
One of the more popular types of instant answers is their cheatsheets.
If you type in something like "vim cheatsheet" to DuckDuckGo,
it will show you a Vim cheatsheet right there in the search results.
They have end-to-end tutorials for their entire contribution process."

## Recommended Readings

_I like to end each interview by asking the subject to recommend two articles,
books, videos, podcasts, etc. that made an impact on them recently.
These recommendations may be related to open source software, to software
engineering in general, or completely unrelated to computers._

"My first link is from sircmpwn, the creator of
[sway](http://swaywm.org/),
and it's his blog post
[*Hack everything without fear*](https://sircmpwn.github.io/2018/03/17/Hack-everything-without-fear.html).
In it, he addresses the topic of being intimidated by large open source projects
and he explains why you shouldn't be too intimated and should just go for it.
I think his attitude about it is really great because he tries to make it
so that everything is up for grabs, which I like a lot.

"My next one is more technical, but
it taught me a surprising amount about PyQt in a really short amount of time.
It's about PyQt memory management and it's called
[*PyQt. How to shoot yourself in the foot.*](http://enki-editor.org/2014/08/23/Pyqt_mem_mgmt.html)
I was completely new to memory management when I read it and it taught me a ton
about it in less than a page.
It's a little bit outdated now, unfortunately,
but still relevant if you want to contribute to PyQt."

You can find Jay at [jgkamat.github.io](http://jgkamat.github.io/)
and on Github [@jgkamat](https://github.com/jgkamat).
