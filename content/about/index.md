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
infrastructure at Stripe.

I try to spend most of my free time slacklining, climbing,
listening to music<span id="song"></span>,
making music, reading, writing,
and watching movies<span id="movie"></span>.

You can find out more about me on all the usual platforms:

- [discogs](https://www.discogs.com/user/jamesbvaughan/collection)
- [facebook](https://fb.com/jamesbvaughan)
- [github](https://github.com/jamesbvaughan)
- [instagram](https://www.instagram.com/jamesontheline/)
- [last.fm](http://www.last.fm/user/magicjamesv)
- [letterboxd](https://letterboxd.com/jamesbvaughan/)
- [linkedin](https://linkedin.com/in/jamesbvaughan)
- [twitter](https://twitter.com/jamesontheline)
  
<script>
  ['song', 'movie'].forEach(item =>
    fetch('https://api.jamesbvaughan.com/' + item)
      .then(r => r.json())
      .then(({ status, body }) =>
        status === 'ok' &&
          (document.getElementById(item).innerHTML = ` (${body})`)))
</script>