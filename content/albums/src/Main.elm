module Main exposing (Model(..), Msg(..), init, main, update, view)

import Browser
import Html exposing (Html, a, div, img, li, p, text, ul)
import Html.Attributes exposing (class, href, id, src, style)
import Http
import Json.Decode exposing (Decoder, field, list, map3, string)
import Random exposing (generate)
import Random.List exposing (shuffle)


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
        , view = view
        }


type alias Album =
    { title : String
    , uri : String
    , imageUrl : String
    }


type Model
    = Loading
    | Failure
    | Success (List Album)


init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading, fetchAlbums )


type Msg
    = GotAlbums (Result Http.Error (List Album))
    | ShuffledAlbums (List Album)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotAlbums result ->
            case result of
                Ok albums ->
                    ( model, generate ShuffledAlbums (shuffle albums) )

                Err _ ->
                    ( Failure, Cmd.none )

        ShuffledAlbums albums ->
            ( Success albums, Cmd.none )


fetchAlbums : Cmd Msg
fetchAlbums =
    Http.get
        { url = "/.netlify/functions/albums"
        , expect = Http.expectJson GotAlbums responseDecoder
        }


responseDecoder : Decoder (List Album)
responseDecoder =
    list albumDecoder


albumDecoder : Decoder Album
albumDecoder =
    map3 Album
        (field "display_title" string)
        (field "uri" string)
        (field "image_url" string)


albumView : Album -> Html Msg
albumView album =
    a [ href album.uri, class "fl w-50 w-third-ns link overflow-hidden" ]
        [ div
            [ class "grow aspect-ratio--1x1"
            , style "background" ("url('" ++ album.imageUrl ++ "') no-repeat center center")
            , style "background-size" "cover"
            ]
            []
        ]


view : Model -> Html Msg
view model =
    case model of
        Failure ->
            p [] [ text "failed to load albums :(" ]

        Loading ->
            p [] [ text "loading..." ]

        Success albums ->
            div
                [ id "album-list"
                , class ""
                , style "font-size" "0px"
                ]
                (List.map albumView albums)
