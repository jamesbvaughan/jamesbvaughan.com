$(document).ready(function () {
	"use strict";

	var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=magicjamesv&api_key=9cec0534e60b827aab0ae1b3e91baf82&format=json';

	$.get(url, function (data) {
		var track = data.recenttracks.track;
		var isArray = track.constructor === Array;
		track = isArray ? track[0] : track;
		$(".nowPlaying").append(isArray ? "At the moment I'm listening to" : "The last song I listened to was");
		$(".nowPlaying").append(" <a href='" + track.url + "'>" + track.name + " by " + track.artist['#text'] + "</a>.)");
	});
});
