---
title: James Vaughan
description: James Vaughan's personal website
---

i'm james. thanks for coming to my website.

i'm glad you found it and i hope you enjoy your time here.

# about me

I grew up in Auburn, California
where I was introduced to many of the things that I'm into today,
including climbing, computers, music, movies, and people.

After high school, I moved to Los Angeles to go to school at UCLA.
After graduating moved up to San Francisco where I worked on
cloud infrastructure and operating systems at Stripe.

Currently, I work at [Arcol](https://arcol.io) helping build the
future of building design software.

I try to spend my free time slacklining, climbing,
listening to music<span id="song"></span>,
making music, reading, writing,
and watching movies<span id="movie"></span>.

# me on other websites

- [twitter](https://twitter.com/jamesontheline)
- [letterboxd](https://letterboxd.com/jamesbvaughan/)
- [last.fm](http://www.last.fm/user/magicjamesv)
- [github](https://github.com/jamesbvaughan)
- [linkedin](https://linkedin.com/in/jamesbvaughan)
- [setlist.fm](https://www.setlist.fm/concerts/jamesbvaughan)
- [mountain project](https://www.mountainproject.com/user/112201703/james-vaughan)

# about this website

This is mostly a place for me to share [things that I write](/blog),
but it's also home to some little projects of mine,
like [this page that lists my favorite albums](/albums) or
[this list of links that I think are cool](/links).

You can read about how I build and manage this site
[here](/how-i-make-this-site).

<script>
  ['song', 'movie'].forEach(item =>
    fetch(`/.netlify/functions/${item}`)
    .then(r => {
      if (r.status !== 200) throw `recieved status ${r.status}`
      return r.text()
    })
    .then(body => document.getElementById(item).innerHTML = ` (${body.trim()})`)
    .catch(console.error)
  )
</script>
