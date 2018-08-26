---
title: Movie Director Genders
date: "2018-08-22"

discussion_links:
  - site_name: Hacker News
    url: https://news.ycombinator.com/item?id=17838047
  - site_name: Reddit
    url: https://www.reddit.com/r/ruby/comments/9a1h11/using_letterboxd_tmdb_and_ruby_to_look_at_movie/
---

I've always loved watching movies.
This started way back when I was in elementary school and my dad designated the
largest room in our house as the movie watching room, to be used strictly for
watching movies.
Since then, movie watching has remained my favorite form of passive
entertainment.

I signed up for [MoviePass](https://moviepass.com/) a while back,
which has led to me watching movies *way* more frequently than I used to.
I also started using [Letterboxd](https://letterboxd.com/) around the same time,
and it has quickly become one of my favorite websites.
I've added nearly every movie I've ever seen to my profile on it,
and it has replaced both Wikipedia and IMDB for me as my go-to site for looking
up basic info about a movie, an actor, or a director.

Lately I've become increasingly aware of how few women I see when I'm browsing
directors of movies that I've watched.
The gender disparity in Hollywood is nothing new,
and people have been talking about it for a long time now.
I realized that, despite knowing about it,
I had never *really* thought about how it relates to
what movies I choose to see or how I perceive the movies that I see,
so I decided to take a look at my personal movie-watching history and see what
the gender breakdown is in the directors whose movies I've watched.

In this post,
I will go through the basics of the ruby script that I wrote to do this
and I will write about what I learned from it.
(If you're interested in what I learned, but not in the technical details,
you can [skip to the end](#results). Don't worry, I won't be offended.)

# Collecting the Data

Fortunately for me, since I joined Letterboxd,
I've been logging every single movie that I watch on it,
so making a list wasn't a difficult task.
I could have gone through this list by hand
and written down the gender of each director,
but I decided to have a little more fun with
it and write a script that does that for me.

## Getting My Movie Diary from Letterboxd

Letterboxd doesn't have a public API available yet,
but they do let you download all of your personal data as CSVs.
One of these CSVs is a file called `watched.csv` that includes a row for every
movie that I have ever marked watched.
After getting that file, I used Ruby's CSV class to parse it:

```ruby
men = 0
women = 0

CSV.foreach('watched.csv') do |movie|
  ...
end

puts "#{women} women, #{men} men"
```

Now to find out what to do with it...

## Finding Metadata for each Movie

Each of the rows in `watched.csv` contains a bit of metadata about a movie that
I have logged, including the url for the movie's Letterboxd page,
but no info about the director, so I knew I would have to do a bit of
scraping to find the directors and their genders.

I used [http.rb](https://github.com/httprb/http) to fetch the pages I needed
and used [nokogiri](http://www.nokogiri.org/) to parse and search them.

Letterboxd gets its movie data from [TMDB](https://www.themoviedb.org/),
a community built movie database.

Fortunately, the Letterboxd devs use
[semantic web](https://en.wikipedia.org/wiki/Semantic_Web) techniques in their
markup, so finding each movie's TMDB ID was not difficult.

```ruby
letterboxd_movie_doc = Nokogiri::HTML(HTTP.get(letterboxd_movie_url).to_s)

tmdb_id = letterboxd_movie_doc.at_xpath('/html/body/@data-tmdb-id')
```

## Determining the Genders

Once I had the TMDB IDs,
I used the TMDB API to get the credits for each movie,
which consist of a bit of data about each person in the movie's cast and crew,
including their gender, as listed on TMDB.

```ruby
tmdb_movie_credits_url = "https://api.themoviedb.org/3/movie/#{tmdb_id}"\
                         "/credits?api_key=#{ENV['TMDB_API_KEY']}"

movie_credits = JSON.parse HTTP.get(tmdb_movie_credits_url)
```

Woohoo we have the director info that we need!
`movie_credits['crew']` is an array with an object for each crew member
that contains basic info about them.

At this point I thought I was pretty much finished.
I just had to filter out the directors from the rest of the crew and add
up the gender counts.

TMDB seemed to be using integers to represent the genders,
with 1 representing female and 2 representing male,
but I was slowed down a bit when a bunch of movie directors came back as
0: neither female nor male.
What did 0 mean? Was TMDB being progressive and providing more than two gender
options?
No, it was just that their data is all crowdsourced and a 0 simply means that
no one has added a gender for that person yet.

```ruby
movie_credits['crew'].each do |credit|
  next unless credit['job'] == 'Director'

  case credit['gender']
  when 1
    women += 1
  when 2
    men += 1
  else
    tmdb_person_url = "https://www.themoviedb.org/person/#{credit['id']}"
    puts "Unknown gender: #{credit['name']}, edit here: #{tmdb_person_url}"
  end
end
```

At first I thought I'd just manually look up all the unknown directors and add
up the numbers myself, but then it hit me that that would be a bit wasteful
given that TMDB is crowdsourced and I could just update the data there
directly!
I added that url to the else clause of the case statement so that I could
easily reach the TMDB page for each director that my script ran into who
didn't have a gender listed on TMDB.

Adding genders for those directors turned out to be really simple and took just
a few minutes of browsing TMDB, cross-referencing with other sources,
and submitting the relevant updates.
Now I had a more sustainable solution, which will hopefully help out future
TMDB users as well.

## Adding It Up

The final step was to add up the numbers and check the results.
Here is the full code (minus a bit of error handling):

```ruby
require 'dotenv/load'
require 'csv'
require 'nokogiri'
require 'http'

men = 0
women = 0

CSV.foreach('watched.csv') do |movie|
  letterboxd_movie_doc = Nokogiri::HTML(HTTP.get(movie[3]).to_s)

  tmdb_id = letterboxd_movie_doc.at_xpath('/html/body/@data-tmdb-id')

  tmdb_movie_credits_url = "https://api.themoviedb.org/3/movie/#{tmdb_id}"\
                           "/credits?api_key=#{ENV['TMDB_API_KEY']}"

  movie_credits = JSON.parse HTTP.get(tmdb_movie_credits_url)

  movie_credits['crew'].each do |credit|
    next unless credit['job'] == 'Director'

    case credit['gender']
    when 1
      women += 1
    when 2
      men += 1
    else
      tmdb_person_url = "https://www.themoviedb.org/person/#{credit['id']}"
      puts "Unknown gender: #{credit['name']}, edit here: #{tmdb_person_url}"
    end
  end
end

puts "#{women} women, #{men} men"
```

# Results

It turned out that as of this writing,
among all of the directors for the 720 movies that I have
marked watched on Letterboxd, **788 were men, and only 39 were women**.
(Many movies, especially old childrens' movies,
had more than one director listed.)

# Final Thoughts

I wish I could say that those results came as a surprise to me,
but to be honest I was expecting about that level of imbalance.
I have known for as long as I can remember that most directors I watch are men,
but that has only recently started to feel strange to me.
I am not, to my knowledge, avoiding movies that are directed by women.
It seems that there are just a lot fewer big movies directed by women out there
to choose from.

If that really is the case, then why is it?
I am not qualified to speculate about that, but I do feel confident that
striving for a more equal balance in directors would lead to a more interesting,
more varied, and overall better selection of movies for audiences to choose
from.
I believe that one way we can work toward that is by supporting female-directed
movies, and showing Hollywood that people really want them.

Personally, I am going to try to change my watching habits over the next year
and make a point of exposing myself to more female-directed movies.
My specific goal is for at least 1/3 of the movies that I watch over the next
year to be directed by women.
I don't think that my doing this is going to change Hollywood,
but I do think that I will expose myself to a broader range of perspectives in
movies that I probably wouldn't be exposed to otherwise,
and will hopefully discover some new favorite filmmakers along the way.

---

This is my first post touching on a current social issue,
and all opinions expressed here are my own,
but I am very much open to feedback on my choice of wording and my thought
process.
If you have any comments or questions related to all this,
technical or non-technical, please let me know!

# Links

- [The full code for this on GitHub](https://github.com/jamesbvaughan/gender-breakdowns)
- [My Profile on Letterboxd](https://letterboxd.com/jamesbvaughan)

While writing this, I read up on the issue and found some articles that are
worth checking out if you are interested in this topic:

- [Why Are There So Few Women Directors (Huffington Post)](https://www.huffingtonpost.com/susanna-white/why-are-there-so-few-wome_2_b_9901980.html)
- [Gender Justice (Slated)](https://filmonomics.slated.com/gender-justice-70f1dccfeb8)
- [Number of Female Directors Falls Despite Diversity Debate, Says Study (Variety)](https://variety.com/2017/film/news/female-directors-hollywood-diversity-1201958694/)
- [Why Are There So Few Female Filmmakers (The Guardian)](https://www.theguardian.com/film/2010/jan/31/female-film-makers)
