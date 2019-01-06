---
title: How To Make HTTP Requests In Elm
date: "2018-12-12"

categories:
  - tech
tags:
  - elm
  - guide

discussion_links:
  - site_name: Reddit
    url: https://www.reddit.com/r/elm/comments/a6kgs7/getting_started_with_http_requests_in_elm/
---

Elm is a language designed for building reliable and robust frontend
applications.
Its purely functional nature makes it a great language for frontend developers
who want to get some exposure to functional programming.

I think Elm is great, but some of the concepts and patterns commonly used in
Elm applications really confused me when I was first learning about it.
I'm hoping that these posts will help others who are in that situation.

In this post, I will explain how to make HTTP requests from an Elm project
that is built around
[The Elm Architecture](https://guide.elm-lang.org/architecture/).
As an example, we'll use this Elm component that fetches a URL for a random
cat image on pageload.

## The Full Program

There are a bunch of pieces that need to fit together in order for this to work,
so rather than building it up incrementally, I'll show you the finished
program first and then break down what each section is doing.

You can run and modify this code in your browser using Ellie
[here](https://ellie-app.com/49YGwNBMQvca1).

```elm
module Main exposing (main)

import Browser
import Html exposing (Html, img, text)
import Html.Attributes exposing (src)
import Http
import Json.Decode exposing (Decoder, field, string)


type Model
    = Loading
    | Failure
    | Success String


view : Model -> Html Msg
view model =
    case model of
        Loading ->
            text "loading..."

        Failure ->
            text "failed to fetch new cat image"

        Success imageUrl ->
            img [ src imageUrl ] []


fetchCatImageUrl : Cmd Msg
fetchCatImageUrl =
    Http.get
        { url = "https://aws.random.cat/meow"
        , expect = Http.expectJson GotResult (field "file" string)
        }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading, fetchCatImageUrl )


type Msg
    = GotResult (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotResult result ->
            case result of
                Ok imageUrl ->
                    ( Success imageUrl, Cmd.none )

                Err _ ->
                    ( Failure, Cmd.none )


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , view = view
        }
```

Alright, let's start breaking this down.

## The Model

The `Model` type is where we define the state of our application and all of the
different shapes it can take on.

```elm
type Model
    = Loading
    | Failure
    | Success String
```

In this case, our application can be in one of three states,
represented by the following three values:

Loading
: This state indicates that we are waiting for the HTTP request to finish.

Failure
: This state indicates that there was a problem with the HTTP request.
It could mean that there was a network error, or that there was a problem
parsing the result.
We could have defined separates states for different kinds of errors, but for
this example, we'll just use one overall `Failure` state.

Success String
: This state indicates that we have successfully finished the HTTP request
and have pulled out a `String` from the response.

It may seem tedious to explicitly define every possible state of the
application, but the fact that Elm forces us to do this comes with some cool
benefits.
Notably, we _cannot_ ignore any possible states and _must_ define the desired
behavior for each state.

This is one of the biggest advantages of using Elm over plain JavaScript:
when your compiler forces you to handle all possible states of the application,
it's impossible to encounter a state at runtime that you haven't handled and
you can virtually eliminate all runtime exceptions!
(To be clear, you can certainly still have bugs in your code,
but just business logic bugs.)

## The View Function

The `view` in an Elm application is a function of the state (the `Model`)
that returns the content to be displayed.

```elm
view : Model -> Html Msg
view model =
    case model of
        Loading ->
            text "loading..."

        Failure ->
            text "failed to fetch new cat image"

        Success imageUrl ->
            img [ src imageUrl ] []
```

Our view function is pretty simple.
If the state is `Loading`, we return the text "loading...",
if the state is `Failure`, we return the text "failed to fetch new cat image",
and if the state is `Success`, we return an `img` element with the image URL
that we got.

If we didn't cover each possible state, then the application would fail to
compile.

## fetchCatImageUrl

```elm
fetchCatImageUrl : Cmd Msg
fetchCatImageUrl =
    Http.get
        { url = "https://aws.random.cat/meow"
        , expect = Http.expectJson GotResult (field "file" string)
        }
```

If you are new to Elm, you might reasonably think on first glance that
`Http.get` is a function that makes an HTTP request and returns the result,
but that isn't quite how things like this work in Elm.

Instead of actually making a request, `Http.get` returns a value that represents
both an intent to make an HTTP request and instructions for what to do with the
response.

The line `expect = Http.expectJson GotResult (field "file" string)` is
essentially saying _"I expect the body of the response to be a JSON object with
the shape `{ "file": "some string here" }`.
After making the request, send the command `GotResult` with the result."_

## The Init Function

The `init` function in an Elm application defines the initial state of the
application, and an action to be taken when it first loads.

```elm
init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading, fetchCatImageUrl )
```

In our case, the initial state of the application is `Loading` and we want
it to immediately fetch a new cat image URL.

## The Update Function

The `Msg` type and the `update` function describe all of the dynamic behavior
of our application.

```elm
type Msg
    = GotResult (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotResult result ->
            case result of
                Ok imageUrl ->
                    ( Success imageUrl, Cmd.none )

                Err _ ->
                    ( Failure, Cmd.none )
```

In this case, there is only one type of state change: `GotResult`,
which indicates that we have finished trying to make the HTTP request and
parse the response.
In a larger application, `Msg` would have multiple possible values,
each representing a different action that can happen,
and `update` would have a case for handling each action.

`GotResult` contains a `Result` which is either `Ok` if the HTTP request was
successfully completed and the response body successfully parsed,
or `Err` if either of these steps failed.

In both cases, we return the new state of the application, and `Cmd.none`
to indicate that there is no immediate action that we would like it to take.

<hr />

I hope that this helped clarify what was once a confusing part of Elm for me!
If anything here was unclear or incomplete, don't hesitate to let me know.
