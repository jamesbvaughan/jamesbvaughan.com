/*global $*/

$(document).ready(function () {
    "use strict";

    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json', function (data) {
        try {
            $("#nowPlaying").append(" (Right now I'm listening to <a href='" + data.recenttracks.track[0].url + "'>" + data.recenttracks.track[0].name + " by " + data.recenttracks.track[0].artist['#text'] + "</a>.)");
        } catch (err) {
            $("#nowPlaying").append("(I last listened to <a href='" + data.recenttracks.track.url + "'>" + data.recenttracks.track.name + " by " + data.recenttracks.track.artist['#text'] + ".)");
        }
    });

});
