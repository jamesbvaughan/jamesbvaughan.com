/*global $*/

$(document).ready(function () {
    "use strict";

    // This controls the movements of the links
    $("a").hover(function () {
        $(this).stop().animate({
            marginLeft: "5px"
        }, "fast");
    }, function () {
        $(this).stop().animate({
            marginLeft: "0px"
        }, "fast");
    });
    
    var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json';

    $.getJSON(url, function (data) {
        if (data.recenttracks.track[0]['@attr'].nowplaying) {
            document.getElementById("musicTitle").innerHTML = "James is listening to:";
        } else {
            document.getElementById("musicTitle").innerHTML = "James last listened to:";
        }
        document.getElementById("song").innerHTML = data.recenttracks.track[0].name;
        document.getElementById("artist").innerHTML = "<i>" +
            data.recenttracks.track[0].artist['#text'] + "</i>";
        document.getElementById("albumArt").innerHTML = "<img src='" +
            data.recenttracks.track[0].image[1]['#text'] +
            "' alt='album art' height='64' width='64'></img>";
    });
    
});