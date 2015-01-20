/*global $*/

$(document).ready(function () {
    "use strict";

    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json', function (data) {
        try {
            document.getElementById("musicTitle").innerHTML = "James is listening to:";
            document.getElementById("song").innerHTML = data.recenttracks.track[0].name;
            document.getElementById("artist").innerHTML = "<i>" +
                data.recenttracks.track[0].artist['#text'] + "</i>";
            document.getElementById("albumArt").innerHTML = "<img src='" +
                data.recenttracks.track[0].image[1]['#text'] +
                "' alt='album art' height='64' width='64'></img>";
        } catch (err) {
            document.getElementById("musicTitle").innerHTML = "James last listened to:";
            document.getElementById("song").innerHTML = data.recenttracks.track.name;
            document.getElementById("artist").innerHTML = "<i>" +
                data.recenttracks.track.artist['#text'] + "</i>";
            document.getElementById("albumArt").innerHTML = "<img src='" +
                data.recenttracks.track.image[1]['#text'] +
                "' alt='album art' height='64' width='64'></img>";
        }
    });

});
