---
title: Counting Usernames from Malicious Login Attempts
date: "2018-05-07"

categories:
  - tech
tags:
  - experiment
  - linux
  - security

discussion_links:
  - site_name: Hacker News
    url: https://news.ycombinator.com/item?id=17017307
  - site_name: Reddit
    url: https://www.reddit.com/r/linux/comments/8hrz9s/counting_usernames_from_malicious_login_attempts/
---

A while back, when I was relatively new to running a VPS
(I'm still new, but I'm less new than I was then),
I was looking through my sshd logs and noticed that I was getting
**a ton** of malicious login attempts.
This initially freaked me out a bit and I wasn't sure what to make of it.

Eventually I learned more about how to properly secure my server
and in the process, I ended up having some fun with the logs.
They included the usernames that the attackers were trying to log in with.
Some of these names seemed strange to me so I took
a closer look in order to find out which usernames were most
commonly attempted.

I thought the results were pretty interesting,
so I'm going to share them with you here.
First, I'm going to walk you through the steps I took to find this
list of commonly attempted username,
but you'd can skip this and scroll to the bottom if you'd just like
to see the list I found.

## Finding the List of Names

The steps to find a list of invalid usernames like this are pretty simple
and straightforward,
but might not be clear or obvious to someone new to using unix
command line tools.
(They would have seemed like magic to me a few years ago!)
For those that are new and curious,
I'm going to walk through each step and explain how I found the list.

I run sshd under systemd,
and if you run a recent version of a major Linux distribution on your server,
you probably do too.
You can view logs from services running under systemd using `journalctl`,
so we can view the ssh logs with

```bash
$ journalctl -u ssh
```

which will show you way more than you need for this exercise.

We can filter the `journalctl` output to just the lines we
care about (those containing the string *"Invalid user"*),
using `grep`:

```bash
$ journalctl -u ssh | grep 'Invalid user'
Apr 17 15:51:33 sshd[28910]: Invalid user danny from 52.20.58.3 port 58067
Apr 17 16:22:48 sshd[29393]: Invalid user t7inst from 195.133.234.67 port 48641
Apr 17 16:42:45 sshd[29720]: Invalid user zimbra from 139.99.122.129 port 49362
...
```

Now we're just looking at logs of login attempts with invalid usernames.

All we care about are the usernames,
so let's cut those out using `cut`:

```bash
$ journalctl -u ssh | grep 'Invalid user' | cut -d ' ' -f 8
danny
t7inst
zimbra
...
```

This should print out a big list of all the invalid usernames,
in the order that they appear in the logs,
but this list is too long,
it contains a bunch of duplicates,
and it's not sorted in an order that we care about.

Fortunately for us,
there are standard tools for fixing all of these problems!

1. First we sort the names (`sort`).
2. Then we filter out duplicates (`uniq`)
and print a count of how many times each name
occurred next to each name (`-c`).
3. Next we sort again,
this time numerically rather than alphabetically (`-n`),
and in reverse so that the highest numbers are at the top (`-r`).
4. Finally, we take just the top 25 names (`head -n 25`).

```bash
$ journalctl -u ssh | grep 'Invalid user' | cut -d ' ' -f 8 \
      | sort | uniq -c | sort -nr | head -n 25
  2563 admin
   745 user
   658 support
...
```

And that's it! Just pipe the logs through a few different tools and
you've got the list.

## Results

These were the top results when I ran this on my server:

```bash
   2563 admin
    745 user
    658 support
    483 test
    323 ubnt
    213 guest
    207 tech
    202 oracle
    200 operator
    196 manager
    158 webadmin
    151 ftpuser
    148 pi
    105 vnc
    105 naigos
    100 ubuntu
     97 student
     94 user1
     93 debian
     78 administrator
     74 PlcmSpIp
     74 backup
     72 demo
     58 test1
     58 mysql
     53 testuser
     51 shoutcast
```

Based on that list,
my guess is that those are all default usernames for different systems
that attackers have found the most success with.
I haven't talked with many other people that manage small servers
for blogs and personal projects like mine to find out if these numbers
are common,
but I assume that they are normal for other publicly accessible servers.

## Security Considerations

Looking into this frightened me at first and made me worried about
the security of my server.
I've learned more about security since then,
and while I'm still far from an expert,
I know enough about my system now that I'm not worried about login
attempts like these.

(I'm embarrassed to say this now, but
one of the first things I did after making this list the first time was
grep for my actual username.
I felt a bit of relief to know that no one had tried my actual username
when it didn't come up,
until I realized that I would have already filtered out my username earlier
with `grep 'Invalid user'` ...*facepalm*.)

A couple security techniques I'm using now are
[not allowing password login](https://help.ubuntu.com/community/SSH/OpenSSH/Configuring#Disable_Password_Authentication),
using [Fail2Ban](https://www.fail2ban.org/wiki/index.php/Main_Page),
and using a custom PAM module I made that texts my phone whenever someone
remotely logs in to my server
(I plan to write a post about this one soon).

Looking at logs can actually be pretty fun!
This will sound pretty elementary to any experienced sysadmin,
but if you are just getting started with this kind of thing,
try playing around with `journalctl`
and digging through `/var/log` to
see if you can find anything interesting.
