---
description: James Vaughan's personal website
---

# about me

I grew up in Auburn, California where I was introduced to lots of things that
I'm into today, like climbing, computers, music, movies, and people.

I learned more about computers at UCLA and then moved up to San Francisco where
I spent a few years working on cloud infrastructure at Stripe.

I'm in Oakland now, working at [Arcol](https://www.arcol.io), building the future of
architecture software and making the power of computer-aided design accessible
to more people.

I try to spend my free time slacklining, climbing, listening to
music<span id="song"></span>, making music, reading, writing, and watching
movies<span id="movie"></span>.

# me on other websites

- {{< link href="https://bsky.app/profile/jamesbvaughan.com" rel="me" >}}bluesky{{< /link >}}
- ~~twitter~~ _{{< link href="https://twitter.com/jamesontheline" rel="me" >}}𝕏{{< /link >}}_
- {{< link href="https://github.com/jamesbvaughan" rel="me" >}}github{{< /link >}}
- {{< link href="https://linkedin.com/in/jamesbvaughan" rel="me" >}}linkedin{{< /link >}}
- {{< link href="https://letterboxd.com/jamesbvaughan/" rel="me" >}}letterboxd{{< /link >}}
- {{< link href="https://www.last.fm/user/magicjamesv" rel="me" >}}last.fm{{< /link >}}
- {{< link href="https://www.setlist.fm/concerts/jamesbvaughan" rel="me" >}}setlist.fm{{< /link >}}
- {{< link href="https://concertboard.com/jamesbvaughan" rel="me" >}}concert board{{< /link >}}

# selected projects

- [Live Gizz Rankings](https://livegizzrankings.com) (2024-)
  A site for fans of King Gizzard & the Lizard Wizard to vote on the band's best
  live performances
- [Listening Spaces](https://listeningspaces.net) (2024-)
  A directory of listening spaces around the world
- [james.land](https://james.land) (2024-)
  Misc sketches and experiments
- [Concert Board](https://concertboard.com) (2023-)
  Letterboxd/Goodreads for concerts
- [Meadow Desk](https://tweenage.engineering/) (2023)
  A configurable DIY desk
- [Inside Patterns](https://insidepatterns.com/) (2022)
  My collection of interior design and decorating patterns inspired by _A
  Pattern Language_

# get in touch
Email me at
{{< link href="mailto:james@jamesbvaughan.com" rel="me" >}}james@jamesbvaughan.com{{< /link >}}
if you'd like to get in contact for any reason.

# about this website

I've written about how I build and manage this site
[here](/how-i-make-this-site/).

<script>
  [song, movie].forEach(async element => {
    const response = await fetch(element.id);
    if (response.ok) element.innerHTML = ` (${(await response.text()).trim()})`;
  });
</script>
