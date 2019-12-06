---
title: James Vaughan
description: James Vaughan's personal website
---

I'm james. Thanks for coming to my website.

I'm glad you found it and i hope you enjoy your time here.

# about me

I grew up in Auburn, California
where I was introduced to rock climbing, slacklining, computers, music,
and pretty much everything that I'm into today.

After high school, I moved to Los Angeles to go to school at UCLA.
I graduated in 2018 and moved up to San Francisco where I now work on
infrastructure at [Stripe](https://stripe.com).

I try to spend most of my free time slacklining, climbing,
listening to music<span id="song"></span>,
making music, reading, writing,
watching movies<span id="movie"></span>,
and [practicing new things](/skills-in-progress).

# follow me

You can find out more about me on all the usual sites
(and some of the less usual ones):

- [discogs](https://www.discogs.com/user/jamesbvaughan/collection)
- [facebook](https://fb.com/jamesbvaughan)
- [github](https://github.com/jamesbvaughan)
- [goodreads](https://www.goodreads.com/jamesbvaughan)
- [instagram](https://www.instagram.com/jamesontheline/)
- [instagram (music)](https://www.instagram.com/jamesmakessounds/)
- [last.fm](http://www.last.fm/user/magicjamesv)
- [letterboxd](https://letterboxd.com/jamesbvaughan/)
- [linkedin](https://linkedin.com/in/jamesbvaughan)
- [setlist.fm](https://www.setlist.fm/concerts/jamesbvaughan)
- [twitter](https://twitter.com/jamesontheline)

# about this website

This is mostly a place for me to share [things that I write](/blog),
but it's also home to some little projects of mine,
like [this page that lists my favorite albums](/albums)
or [this list of links that I think are cool](/links).

You can read about how I build and manage this site
[here](/how-i-make-this-site).

<script>
  ['song', 'movie'].forEach(item =>
    fetch(`/.netlify/functions/${item}`)
      .then(r => r.text())
      .then(r => {
        if (r.status !== 200) throw
        return r
      })
      .then(body => document.getElementById(item).innerHTML = ` (${body.trim()})`))
      .catch(err => console.log(err))
</script>
