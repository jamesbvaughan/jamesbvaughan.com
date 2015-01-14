/*global $*/

/*
 * Draws a line to the canvas
 * x and y are the mouse coordinates
 * context is the canvas context to draw the line to
 * angleAdd is the angle in degrees to be added to the line
 * startX and startY are the line's origin coordinates
 * m is the multiplier for the line's movement (1 or -1)
 */
function drawLine(x, y, context, angleAdd, startX, startY, m) {
    "use strict";
    var ctx = context,
        angle = Math.atan(y / x) + angleAdd * Math.PI / 180;

    ctx.clearRect(0, 0, 200, 200);

    ctx.translate(startX, startY);
    ctx.rotate(angle * m);
    ctx.fillRect(0, 0, 200, 3);
    ctx.rotate(-angle * m);
    ctx.translate(-startX, -startY);
}

function setTop() {
    "use strict";
    
    $("#links").css("top", ($("#links").css("top") + 100));
}

$(document).ready(function () {
    "use strict";
    
    // These are the four canvases with their contexts
    var tlCanvas = document.getElementById("topLeft"),
        tlctx = tlCanvas.getContext("2d"),
        trCanvas = document.getElementById("topRight"),
        trctx = trCanvas.getContext("2d"),
        blCanvas = document.getElementById("bottomLeft"),
        blctx = blCanvas.getContext("2d"),
        brCanvas = document.getElementById("bottomRight"),
        brctx = brCanvas.getContext("2d");

    // This function controls the movements of the main links
    $("a").hover(function () {
        $(this).stop().animate({
            marginLeft: "5px"
        }, "fast");
    }, function () {
        $(this).stop().animate({
            marginLeft: "0px"
        }, "fast");
    });

    // This function refreshes the positions of the four lines every time the mouse moves
    /*$(document).mousemove(function () {
        var e = window.event,
            x = e.clientX,
            y = e.clientY,
            h = $(window).height(),
            w = $(window).width();

        drawLine(x, y, tlctx, 0, 0, 0, 1);
        drawLine(w - x, y, trctx, 180, 200, 0, -1);
        drawLine(x, h - y, blctx, 0, 0, 200, -1);
        drawLine(w - x, h - y, brctx, -180, 200, 200, 1);
    });*/
});