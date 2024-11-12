---
title: Custom iPhone text tones
date: 2024-11-11
sharing: false
discussion_links:
  - site_name: Hacker News
    url: https://news.ycombinator.com/item?id=42117983
---

I made some custom text notification tones for my phone today.

{{< img "synth-setup.jpg" "My synth setup" >}}

I like the default iPhone text tone:

{{< audio-clip
id="default"
name="Note (Default)"
artist="Apple"
src="default.mp3"
>}}

It's probably one of the most recognizable pieces of recorded sound.
But I wanted something a bit more personal.
Something close enough to the default to be recognizable, but distinct enough to
feel like it's mine.

Here are some of my attempts so far:

## The default sound, pitch shifted

First, I took the default sound and pitched it down a half step:

{{< audio-clip
id="down"
name="Note (pitched down)"
artist="Apple and me"
src="default-pitched-down.mp3"
download="default-pitched-down.m4r"
>}}

I like that this one is subtle enough that it might go unnoticed by some, and
most people will probably be able to tell that _something_ is off about it even
if they can't put their finger on it.

## My own sounds

After that, I made my own sounds from scratch using some synths.

{{< img "synth-closeup.jpg" "A modular synth patch" >}}

For the first of these, I tried to match the original but with my own touch:

{{< audio-clip
id="mine"
name="James' Note"
artist="me"
src="mine.mp3"
download="mine.m4r"
>}}

I recorded this from a simple patch that I put together on my modular synth.
I didn't take a picture of the patch before changing it, but I think it was a
couple oscillators tuned to a high C running through a low-pass filter with an
envelope on the filter's cutoff frequency.

After that, I tried to read up on the history of the default sound.
I couldn't find much information on the current default, but did find
[plenty](https://www.engadget.com/2013-08-11-behind-the-music-the-story-of-marimba-158-the-iphone-text-tone.html)
[of](https://theweek.com/articles/461124/forgotten-origin-story-iphones-tritone-text-message-sound)
[articles](https://www.fastcompany.com/1673245/the-surprising-story-behind-the-iphones-iconic-text-message-sound)
on the previous default text tone, the "tri-tone" a.k.a.
[Kelly Jackson's _Marimba 158_](http://jacklinstudios.com/docs/making-of-158-marimba.html):

{{< audio-clip
id="tritone"
name="Marimba 158"
artist="Kelly Jackson"
src="tritone.m4a"
download="mine.m4r"
>}}

I misunderstood the first of these that I read, thinking that it was referring
to the current default sound, and that the current "Note (Default)" sound was a
triad rather than a single note, so I tried to re-create that triad:

{{< audio-clip
id="dissonant-chord"
name="Dissonant Chord"
artist="me"
src="dissonant-chord.mp3"
download="dissonant-chord.m4r"
>}}

{{< audio-clip
id="noisy-dissonant-chord"
name="Noisy Dissonant Chord"
artist="me"
src="noisy-dissonant-chord.mp3"
download="noisy-dissonant-chord.m4r"
>}}

These came out pretty dissonant, which is not surprising in retrospect since
those three notes were meant to be played in sequence as a melody rather than as
a chord.

{{< img "synth-closeup-2.jpg" "A close-up of the modular synth" >}}

After that, I went back to working with a single note and came up with this
sound with a slower attack than the others:

{{< audio-clip
id="exponential-attack"
name="Exponential Attack"
artist="me"
src="exponential-attack.mp3"
download="exponential-attack.m4r"
>}}

If I record more, I'll add them here.

On my phone, I'm either going to use my pitched down version of the default or
my attempt to re-create it.
I like that those two are each just one degree removed from the original.

## How to use these sounds

Here's what I've been doing. This is specific to iPhones and Macs.
If you're using Linux/Android/Windows you'll need to search for instructions for
your platform.

1. Connect your iPhone to your Mac via USB.
2. On your Mac, open up the "General" page for your iPhone in Finder.
3. In another Finder window, navigate to the `.m4r` file that you'd like to use.
4. Drag that file onto the iPhone's "General" page.
5. On your iPhone, go to _Settings > Sounds & Haptics > Text Tone_, scroll to
   the bottom of the page, and you should be able to select your custom tone.

As far as I'm aware, there is no way to manage installed custom ringtones on
current iOS.
If anyone knows how, please [let me know](mailto:james@jamesbvaughan.com)!
