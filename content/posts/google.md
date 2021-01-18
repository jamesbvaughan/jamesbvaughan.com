---
title: De-Googlifying and (partially) re-googlifying my life
date: 2021-01-17
---

In 2018, I made the decision to stop using Google products whenever I could find reasonably good alternatives.
This wasn't driven by a strong or well-thought-out anti-Google mindset;
I was mostly just curious to see if it were really possible and had been seeing enough anti-Google sentiment in Hacker News comments and on blog posts that I had a vague sense that I'd be better off in terms of data privacy.

This year, I've begun to reverse some of those decisions and migrate back to certain Google products, but before talking about that I'll list the Google alternatives that I had switched to.

# Google Alternatives

## Gmail -> Fastmail

This was the most involved migration of those listed here,
but in reality it wasn't that bad.
I was already using a custom email address that was forwarding to my Gmail address and had most services using that address.

To switch to Fastmail, I registered for an account, set up my MX records, and after DNS propagated everything worked great. In order to fully migrate everything off of my old Gmail account, I set up forwarding from that address to my new address and set up a filter in Fastmail to put everything sent to my old Gmail address in a folder called `Gmail`. Whenever something showed up in that folder, I either unsubscribed if it was something I didn't care about or updated my address at that service. After a couple months, I had ~completely migrated off of my Gmail address. (There are a few stragglers that pop op occasionally, but I'm down to just a few emails a year coming to that inbox.)

For a client, I used the Apple Mail iPhone app on mobile and the Fastmail web client on desktop. I found the web client to be good, and I really fell in love with the Apple Mail app.

## Google Calendar -> Fastmail Calendar

This switch was pretty straightforward: I was able to export all of the events from my calendars in Google calendar and import them to new calendars in Fastmail. They also have an option to manage existing Google calendars from the Fastmail interface, but I wasn't interested in that since I wanted to fully migrate.

The main downside to this change was that some 3rd party tools like Calendly that don't have support for standard calendar protocols weren't compatible with Fastmail.

## Google Maps -> Apple Maps

The move to Apple Maps didn't require any real migration, beyond changing my default map app.

I really like using the Apple Maps app. It looks good and feels good.
I hear from other people that the directions are worse than Google's,
but I did not personally have bad experiences with Apple's directions.
This might be because I don't drive often or because I'm not often in a
hurry and don't care much about taking the most optimal route.

That being said, this was one of the most difficult switches to stick with.
Despite the app looking and feeling great, and the driving directions being
adequate for me, it lacks two important things for me:
- Bike directions. They added this in 2020, but having decent bike directions is more important to me than having optimal driving directions, and Apple's bike directions here in San Francisco have been particularly bad. I'm hoping they get better over time, but I've been directed to some really bad-for-biking roads when I know that there are better or safer routes nearby.

## Google Search -> DuckDuckGo

This move turned out to be one of the best.
Despite what I had read and heard from other, I actually find DuckDuckGo's
results to be _better_ than Google's result half the time, perfectly usable 40%  of the time, and for that final 10%, appending a `!g` to my search to redirect it to Google is easy enough.

My favorite things about it are the customizability of the interface and the bangs.
My most frequently used bangs are:
- `!w` for Wikipedia
- `!yt` for YouTube
- `!i` for image search
- `!lb` for [Letterboxd](https://letterboxd.com)
- `!as` for Amazon Smile

(If you're reading this and you use DuckDuckGo,
let me know if there are any good ones I'm missing out on.)

## Android -> iPhone

Having been a proud Android user since my first smartphone,
I was really reluctant to make this change,
but after using an work iPhone for a while, I slowly found myself using it more and more for various tasks than my personal Android phone.
Eventually I decided to switch my personal phone and haven't looked back.

One of the things that really sold me was Apple's _good default apps_.
I know a lot of people replace them with 3rd-party alternatives,
but I actually find apps like Apple's Mail, Calendar, Contacts, and Reminders to be
quite good!
They support industry standards like IMAP, CalDAV, CardDAV, so I can easily use them with whatever service I want that also supports those standards.

On Android I spent a lot of time customizing my launcher and playing with different looks.
In contrast, on the iPhone I spend ~zero time doing that and I actually have grown to prefer it.
There's probably a darker interpretation of this mindset shift, seeing it as an embrace of conformity and death of self-expression (I loved [Google's "be together, not the same" ad campaign for Android](https://www.youtube.com/watch?v=hr0HBLGFEsA)),
but (at the risk of sounding more snarky than I intend), I would rather have a phone that helps me create things that express myself rather than the phone itself being my form of self-expression, and in my experience iPhone vs Android doesn't make a big difference there at the end of the day.

## Google Analytics -> Fathom -> Netlify Analytics -> No Analytics

This one has been a longer and more winding journey.

I switched from Google to Fathom a while back because I wanted analytics but wanted something that was more respectful to the people who visit my website, but I lost interest in maintaining my self-hosted installation of it,
and the hosted version cost more than it was worth to me.

After that I tried out Netlify Analytics.
I really like this solution because it's all server-side, meaning it requires nothing extra added to my site, no additional Javascript for visitors to download and run.
I eventually turned this off too though because the data you get is pretty limited and wasn't worth the price to me.
This was not just because it's a server-side solution: I was happy with the level of details and types of data they provide, but they only give you access to up to 30 days of data, and I'm interested in seeing graphs over a much longer timespan than that.

Currently (as of the date this post was published), I don't have any analytics set up for this site, but I may try out Netlify's solution again in the future if they add more features that are available in similar log-analysis-based tools.

## Google Chrome -> Firefox -> Safari

This switch was easier than I expected.
I really just want a web browser to render web pages and stay out of the way, and all three of these browsers do that well enough for my needs.

I recently switched from Firefox to Safari and have been really happy with it.
My main complaint is the lack of extension support, but after finding decent extensions for [Vim-keybindings](https://github.com/televator-apps/vimari) and [Pinboard](https://github.com/kristofa/bookmarker_for_pinboard), it hasn't been an issue.

## Google Passwords -> pass -> 1Password

Switching from Google's password manager to [pass](https://www.passwordstore.org) felt like a breath of fresh air for me.
I started using it at a time when I was using a lot of terminal apps and it felt nice to be fully in control of my password database.

When I started my current job though, I was given a 1Password Business account and couldn't help but enjoy how well it worked and how much more seamlessly it integrated into the operating system and my web browsers.
When I saw that [1Password had started including Family memberships for employees with Business accounts](https://support.1password.com/link-family/),
I decided to make the switch.
This does mean that I'll have to start paying for my 1Password Family account if I leave my current job, but I've been happy enough with it that I think their pricing is well-worth the product.
