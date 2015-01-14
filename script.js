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
});