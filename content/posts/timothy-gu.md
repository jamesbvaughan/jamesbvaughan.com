---
title: Timothy Gu
date: 2018-05-01

footer: oss-footer.html
---

In this first post in my series interviewing students in open source,
I chose to interview fellow UCLA student Timothy Gu
([TimothyGu](https://github.com/TimothyGu)).
Timothy is a first year Computer Science student here at UCLA and he has been
active in open source since he was in High School.
He is a maintainer of
[Node.js](https://github.com/nodejs/node)
and a contributer to
[pug](https://github.com/pugjs/pug),
[FFmpeg](https://github.com/FFmpeg/FFmpeg),
and the
[whatwg html standard](https://github.com/whatwg/html).

## Interview

_Sunday, April 15, 2018._

**James: You have an impressive contribution history,
especially as a freshman in college.
How did you first get started coding?**

Timothy: "I've always been a pretty curious person
and I always want to know how things work.
When I see something that is broken, I always want to fix it.
Back in middle school, I was probably the techiest person in my family.
My mom had this DVD that she wanted to convert to a format that could be
shared to my grandparents, so she asked me to take a look at it.

"I found this open source tool called FFmpeg which seemed like the perfect
tool for this,
but the problem was that FFmpeg was really badly documented and very complex.
I knew that it was the right tool for the task, but didn't know how to use it.
After a lot of work, I finally figured it out, but I didn't want other
people to have to go through that.

"That kind of began my journey into open source:
I wrote up the documentation for what I had done on the FFmpeg wiki and
then started trying to contribute to the official documentation.

"It wasn't really _coding_ because it was just fixing documentation and
typos, but around that same time, I decided to start trying to learn to
read the code for FFmpeg in order to actually understand how it works.
This got me started learning C, which FFmpeg is written in.
I got stuck when I came to pointers because I had no idea how they worked,
so I started reading more of FFmpeg's code which exposed me to how they
actually used C and used pointers and stuff like that.

"For a few months, I didn't really write any code myself,
but rather, I read a lot of code written by other people and learned a lot from it.
This was good for me because I got to see how code is actually written and how
the coding industry works.
Even though I wasn't writing my own code,
I learned a lot about programming practices and paradigms."

**How did you know about FFmpeg in the first place?**

"Well, I didn't.
I just looked up tutorials online on how to convert things from one format to
another and that led me to FFmpeg.

"I'm naturally curious and like to know how things work,
so I looked up the FFmpeg commands that I was running,
and that led me deeper into FFmpeg."

**How did you get started reading the code,
having never been exposed to programming before?**

"I couldn't tell you exactly when I first looked at the code, but like I said,
I had been interested in computers for a long time
and I just thought that looking through the code probably isn't that difficult.
Computers are more or less logical and having some experience with them made me
think that these small issues I was finding would not be too difficult to
understand in the code."

**After your involvement with FFmpeg,
what other projects did you get involved with?**

"After starting with FFmpeg, I learned a lot more about C,
but then in high school, I learned Node.js.
JavaScript was a pretty easy language compared to C,
so I found that I could start to create my own things
rather than just reading other people's code.

"I got the idea to make a better version of the continuous integration
tool that FFmpeg had, so I got started writing that with Node.js,
and it worked pretty well,
but I didn't really know much about JavaScript,
or especially about asynchronous programming back then.
It was a foreign concept to me.

"For the longest time, I was kind of rolling in the mud because I had no idea
what was going on,
but because of that experience I did learn a lot about
the quirks of the platform and how things were supposed to work.

"There was a lot of trial and error,
but in hindsight I think that was the best way to learn,
because you basically see all the errors that you can possibly see and then
when you see them again you'll be able to fix them because you've seen them
before.

"If I were to look back at the code I wrote back then,
it would probably be really weird and not the way I would do things now,
but it was a really good learning experience.

"One of the other projects that I invested a lot of time in was Pug,
which used to be called Jade.
My first contribution to that project was also a documentation fix.
I think it was just fixing a broken link,
something really small like that, and then it led to something more."

**It's been a while since your last blog post.
Do you have plans to keep writing more on there?**

"I do like writing sometimes,
but I don't really have a solid plan for updating my blog.
The blog isn't my only medium for writing though;
over this winter I wrote
[a document on how to read and understand the JavaScript spec](https://timothygu.me/es-howto/).
I personally think that more people should get started with reading the spec
because it's such a useful resource.

"I'm part of ACM Hack at UCLA and we have a few internal projects that
we work on.
I wrote a document recently trying to encourage people in ACM Hack to
read through other people's code.
Right now the code reviews are mostly done by me and one other person,
but I really want to try to get other people working on the project
to be involved in reading through the code as well."

**What advice do you have for students who are interested in getting involved
in open source but don't know where to start?**

"That's a difficult question because the way I learn things is through a LOT
of trial and error, which is something that I don't want everybody to have
to go through.
I had a lot of free time in high school, which gave me the opportunity to do
that, but in college everyone is a lot more busy,
so it's difficult for me to be able to apply my experience to other people.
The best thing I can say is that open source developers and maintainers are
just people.
Some have more experience and some have less experience
(like me when I was starting out with FFmpeg),
and honestly everyone is willing to help.

"The JavaScript community tends to have a lot of new people and people are
always happy to help them out.

"For people that are interested but don't really know where to start,
the best thing is to help out on a project that you actually use yourself.
That makes it easier to contribute because you have an idea of how the
software works and you can reason through things better than staring
with a completely new project to you.

"If you spot a bug in a project you use, you can file an issue,
but you can also go further than that and try to look through the source code
to find out where the bug is coming from.
I think that this is the most effective way of getting involved in a project.
If you don't understand something, ask questions.
People are often a lot more friendly than you would expect.

"There's a big difference between trying to fix a bug you found yourself and
trying to fix someone else's bug.
In large software projects, bugs are very hidden and require a very specific
set of circumstances for the bug to occur.
If you discover a bug on your own, you are often the most knowledgeable
person about that bug."

## Recommended Readings

_I like to end each interview by asking the subject to recommend a couple
articles, books, videos, podcasts, etc. that made an impact on them recently.
These recommendations may be related to open source software, to software
engineering in general, or completely unrelated to computers._

Timothy had a unique answer to this compared to other people I've spoken with.
The number one thing he recommended reading if you want to improve and grow
with your programming skill and experience with open source is **code**.
Not just your own code, but most importantly, _other people's code_.
Reading through other people's issues, code, and pull requests was the most
effective way he learned and he recommends it for everyone.

He also recommends reading through the official JavaScript spec
and has written up
[an extensive guide on how to read it](https://timothygu.me/es-howto/).

You can find Timothy at [timothygu.me](https://timothygu.me),
on Github [@TimothyGu](https://github.com/TimothyGu),
and on Twitter [@Timothy_Gu](https://twitter.com/Timothy_Gu).
