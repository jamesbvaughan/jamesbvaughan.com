---
layout: page
title: About Me
permalink: /about
---

Hey! My name is James Vaughan and I live in California and study computer
science at UCLA.
I'm usually out slacklining and climbing, but sometimes I take pictures,
go to class, and write code, and I'm always listening to music.
<span id="nowPlaying"></span>

If you don't believe me or you just want to learn more,
you can see some photos and read about my slacklining adventures on
[instagram](https://www.instagram.com/jamesontheline/),
check out my scrobbling history on
[last.fm](http://www.last.fm/user/magicjamesv),
look at my profile on
[linkedin](https://www.linkedin.com/in/jamesbvaughan),
or take a peek at some of my personal projects on
[github](https://github.com/jamesbvaughan),

I've been spending most of my time lately playing with Linux,
learning new programming languages, and building websites.
The thing that excites me the most about computers is the potential for
improved educational materials making use of digital interactive visualizations
and explanations that give students greater understanding and intuition about
the world around them.

<script>
  const url = 'https://ws.audioscrobbler.com/2.0/'
    + '?method=user.getrecenttracks'
    + '&limit=1'
    + '&user=magicjamesv'
    + '&api_key=9cec0534e60b827aab0ae1b3e91baf82'
    + '&format=json'
  fetch(url)
    .then(data => data.json())
    .then(json => json.recenttracks.track)
    .then(tracks =>
      document.querySelector("#nowPlaying").innerHTML = `
        (${tracks.length > 1
            ? "At the moment I'm listening to"
            : "The last song I listened to was"}
        <a href='${tracks[0].url}'>
          ${tracks[0].name} by ${tracks[0].artist['#text']}
        </a>.)`)
</script>
