---
title: about me
menu:
  main:
    title: about
    weight: 1
---

I grew up in Auburn, California
where I was introduced to rock climbing, slacklining, computers, music,
and pretty much everything that I'm into today.

After high school, I moved to Los Angeles to attend UCLA.
I graduated in 2018 and moved up to San Francisco where I now work on
infrastructure at [Stripe](https://stripe.com).

I try to spend most of my free time slacklining, climbing,
listening to music<span id="song"></span>,
making music, reading, writing,
and watching movies<span id="movie"></span>.

You can find out more about me on all the usual platforms:

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

<script>
  ['song', 'movie'].forEach(item =>
    fetch(`/.netlify/functions/${item}`)
        .then(r => r.text())
        .then(body => document.getElementById(item).innerHTML = ` (${body.trim()})`))
        .catch(err => console.log(err))
</script>
