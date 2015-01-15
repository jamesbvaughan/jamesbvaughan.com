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
    
    var x = '2je33u4bd89cec0534e60b827aab0ae1b3e91baf8228fg0rk487z0sn2z9sn3484b560ng98';
    var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9csd784e60b827a3983491b3e91baf82&format=json';
    
    $.getJSON((url.substring(0, 96) + x.substring(11, 42) + url.substring(127)), function (data) {
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