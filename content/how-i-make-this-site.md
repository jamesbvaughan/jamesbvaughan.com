---
title: How I Make This Website
description: >
  The ever-changing workflow that I use to build and maintain this website.
---

Maintaining this website is a hobby of mine.
This page serves as its development documentation,
both for myself and anyone else who might be interested.

# source code

The source code for this website lives in a git repository that you can find
[here on GitHub](https://github.com/jamesbvaughan/jamesbvaughan.com).

# editing layouts and content

I use [Hugo](https://gohugo.io), a static website generator, to turn
[some HTML layouts](https://github.com/jamesbvaughan/jamesbvaughan.com/tree/main/layouts)
and [some Markdown](https://github.com/jamesbvaughan/jamesbvaughan.com/tree/main/content)
into a bunch of HTML that I can serve as this website.

# builds and deploys

I host these static files on [Cloudflare Pages](https://pages.cloudflare.com/).
Each time I push a new commit to the `main` branch in GitHub, Cloudflare kicks
off a new build, which bundles
[a few serverless functions](https://github.com/jamesbvaughan/jamesbvaughan.com/tree/main/functions)
and builds the site with Hugo.

If the build succeeds, an updated version of the site is published!

# javascript

I like JavaScript! But I try to keep this site free from it unless it's
necessary for some functionality that I want to provide.

At the time of this writing, the only uses of JavaScript on the site are:

- [A few lines at the bottom of my homepage](https://raw.githubusercontent.com/jamesbvaughan/jamesbvaughan.com/main/content/_index.md)
  that fetch the most recent song I've listened to and movie I've watched.
- [A single line at the bottom of my 404 page](https://github.com/jamesbvaughan/jamesbvaughan.com/blob/main/layouts/404.html#L19)
  that creates a link to send me a tweet telling me to fix the page you were
  looking for.
- [A small script on my Southwest Wifi post](https://github.com/jamesbvaughan/jamesbvaughan.com/blob/main/content/posts/southwest-wifi/charts.js)
  that renders the charts in it.

# analytics

I don't use any client-side analytics/tracking code.
I'm not completely opposed to websites collecting analytics - I just don't have
a need for it here.
I can see high-level traffic trends on Cloudflare and that's plenty for this
site.
