---
title: Finding Free Food with Python

discussion_links:
  - site_name: Hacker News
    url: https://news.ycombinator.com/item?id=13808830
  - site_name: Reddit
    url: https://www.reddit.com/r/programming/comments/5xz2j3/finding_free_food_with_python/
---

If you live in a major city, there's a good chance you've used
(or at least heard of) food delivery services like Postmates,
GrubHub, or DoorDash.
These services are great for times when I'm behind on groceries
or when I'm getting some late night studying in before a big
midterm or final.
The only problem with these is that they're not cheap.
For a single order, the delivery fee and service fee can
sometimes double the cost of the order.

Fortunately for me, Postmates regularly does promotions where
they offer free food and waive the delivery fee for certain restaurants.
The only problem with these promotions is that they're easy to
miss.
I generally rely on waiting for a friend to catch one of these
promotions by chance and text me about it.
I actually have a group message with some friends titled
"Free Postmates" that we exclusively use for keeping track of
Postmates promotions.

I recently realized that I could make this process much simpler
by creating something that would track the Postmates website
and notify me of deals.
In this post, I'll describe how I built a tool to do this.
It turned out to be a lot simpler than I had expected and has
made me a lot more confident to create things like this in the
future.
If you're new to the tools I use in this post,
I hope that reading it helps you feel comfortable getting started
with them!

### Choosing a Language
For something like this, the language choice isn't super critical.
My only requirements were that it be a language that is simple
for me to use, and has nice libraries for doing the things
I need to do (web scraping and notifying my phone).
This helped me narrow it down to Javascript and Python.
There are plenty of other great choices for something like this,
but those are the two that I knew I could work efficiently in,
based on my past experience.
I ended up choosing Python, mostly because I had slightly less experience
with it and wanted to learn more.

### Choosing a Web Scraper
This was a fairly easy decision as I had used
[Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)
for web scraping in Python before and had a good experience with
it.
Beautiful Soup isn't the only option here,
(another good one is
[Scrapy](https://scrapy.org/)),
but it's the one I knew how to use and I knew that it would
make things simple so I went with it.

### Choosing a Notifier
The final thing I needed to decide on for this project was some
way to notify myself when a promotion was found.
I had been wanting to use
[Twilio](https://twilio.com)
for something for a while, so I decided to go with that.
In case you haven't heard of Twilio, it's a service that provides
a way to integrate different kinds of messaging into your
program.
One of it's most popular features allows you to send and receive
SMS messages.
This seemed like a nice method since it wouldn't require anything
special on my phone.

## First Steps
When I'm working on something new like this,
I like to start with the most basic steps and work my way up
from there.
For this project, that meant writing two separate super simple
scripts: one that fetches the web page to scrape and just
prints the whole thing, and one that sends a "Hello World"
SMS to my phone.

After brushing up on the Beautiful Soup API, I came up with this:

```python
from bs4 import BeautifulSoup
import requests

url = 'https://postmates.com/los-angeles'
webpage = requests.get(url)
soup = BeautifulSoup(webpage.text, 'html.parser')
print(soup)
```

Not too impressive yet, but it's always good to see something
working before things get too complicated.

Now that I had the webpage,
I wanted to get up and running with a basic "Hello World" through
Twilio.
They have a great Getting Started guide in their docs and
it didn't take long before I had received my first text from my
free Twilio phone number.

```python
from twilio.rest import TwilioRestClient

account_sid = 'XXX'
auth_token = 'XXX'
twilio_phone_number = '+15558675309'
my_phone_number = '+15551234567'

client = TwilioRestClient(account_sid, auth_token)

client.messages.create(
    body="Hello World!",
    to=my_phone_number,
    from=twilio_phone_number
)
```

After signing up for a free Twilio account and finding my
account token, auth token, and registering a Twilio phone number,
this worked like a charm!

## Putting it all Together
Now that I had the basic pieces working, I just had to find a
way to extract the promotions from the web page and connect it all
up!

Fortunately for me, this turned out to be fairly simple as well.
After browsing the source for the front page of Postmates in my
developer console, I found out that whenever there is a free
promotion, the `<div>` containing the restaurant's title
also contained the word "Free".[^1]
This meant that all I needed to do was find the elements
containing the string "Free" and send their inner text to my phone!
This is what I ended up with:

[^1]: *This has been the case with every free promotion I've seen so far, but it's very possible that I've missed some if they follow a different format.*

```python
from bs4 import BeautifulSoup
import requests
from twilio.rest import TwilioRestClient
import re

url = 'https://postmates.com/los-angeles'
account_sid = 'XXX'
auth_token = 'XXX'
twilio_phone_number = '+15558675309'
my_phone_number = '+15551234567'

webpage = requests.get(url)
soup = BeautifulSoup(webpage.text, 'html.parser')

free_regex = re.compile('free')
all_strings = list(soup.stripped_strings)
free_food = [s for s in all_strings if free_regex.match(s.lower())]

if free_food:
    body = 'Free Postmates!\n\n' + '\n'.join(free_food)
    client = TwilioRestClient(account_sid, auth_token)
    client.messages.create(
        body=body,
        to=my_phone_number,
        from=twilio_phone_number
    )
```

And that's it! The only thing left to do was to make this script
run regularly enough to catch all the deals.
This is the kind of thing that Cron is perfect for,
but I had been reading a bit about Systemd Timers and how they
can be used as an alternative to Cron jobs, so I chose to go
with those.
I won't go into the details of setting up a Systemd Timer in this
post, but I have some slides on it that provide a quick introduction
in [this post]({{ site.url }}{% post_url 2017-3-1-systemd-timers %}).

Thanks for reading this! I hope it helped provide insight into
the way I approach creating something like this, and maybe even
inspired you to make something similar.
Feel free to comment if you have any questions about it, or if you
notice anything that I could have done better.
