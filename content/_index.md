---
description: James Vaughan's personal website
---

# about me

I grew up in Auburn, California where I was introduced to lots of things that
I'm into today, like climbing, computers, music, movies, and people.

I learned more about computers at UCLA and then moved up to San Francisco where
I spent a few years working on cloud infrastructure at Stripe.

I'm in Oakland now, working at [Arcol](https://arcol.io), building the future of
architecture software and making the power of computer-aided design accessible
to more people.

I try to spend my free time slacklining, climbing, listening to
music<span id="song"></span>, making music, reading, writing, and watching
movies<span id="movie"></span>.

# me on other websites

- ~~twitter~~ _{{< link href="https://twitter.com/jamesontheline" rel="me" >}}𝕏{{< /link >}}_
- {{< link href="https://letterboxd.com/jamesbvaughan/" rel="me" >}}letterboxd{{< /link >}}
- {{< link href="http://www.last.fm/user/magicjamesv" rel="me" >}}last.fm{{< /link >}}
- {{< link href="https://github.com/jamesbvaughan" rel="me" >}}github{{< /link >}}
- {{< link href="https://linkedin.com/in/jamesbvaughan" rel="me" >}}linkedin{{< /link >}}
- {{< link href="https://www.setlist.fm/concerts/jamesbvaughan" rel="me" >}}setlist.fm{{< /link >}}
- {{< link href="https://www.mountainproject.com/user/112201703/james-vaughan" rel="me" >}}mountain project{{< /link >}}
- {{< link href="https://indieweb.social/@jamesbvaughan" rel="me" >}}mastodon{{< /link >}}

# get in touch

I'm at {{< link href="mailto:james@jamesbvaughan.com" rel="me" >}}james@jamesbvaughan.com{{< /link >}} and love hearing from new people.

Reach out if you'd like to chat about new ideas, work together, or get coffee.

# about this website

This is mostly a place for me to share [things that I write](/blog),
but it's also home to some little projects of mine,
like [this page that lists my favorite albums](/albums) or
[this list of links that I think are cool](/links).

I've written about how I build and manage this site
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
