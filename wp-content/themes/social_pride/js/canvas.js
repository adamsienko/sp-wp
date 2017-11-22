var time = 0;

var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

var numberOfSides = 80,
    size = 280,
    Xcenter = 400,
    Ycenter = 400,
    floatingAmount = 20,
    pointSpeedFactor = 3;

var randomLinesAmount = Math.random() * 20 + 20;
var randomLines = new Array();
var circle = new Array();
var circleFloating = new Array();

for (var i = 1; i <= 2 * numberOfSides; i += 1) {
    x = Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides) + Math.random() * 110;
    y = Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides) + Math.random() * 110;
    circle.push([x, y]);
    circleFloating.push([x, y, '', '', Math.random()]);
}

for (var i = 0; i < randomLinesAmount; i++) {
    randomLines.push(Math.floor(Math.random() * circleFloating.length));
}
var linesWidth = 1.2;

function drawlines() {
    for (var i = 0; i < randomLinesAmount; i++) {
        ctx.beginPath();

        ctx.moveTo(circleFloating[randomLines[i]][0], circleFloating[randomLines[i]][1]);

        if (circleFloating[randomLines[i]][0] > Xcenter && circleFloating[randomLines[i]][1] > Ycenter) {
            ctx.lineTo((Xcenter + (circleFloating[randomLines[i]][0] - Xcenter) * linesWidth), (Ycenter + (circleFloating[randomLines[i]][1] - Ycenter) * linesWidth));

        } else if (circleFloating[randomLines[i]][0] < Xcenter && circleFloating[randomLines[i]][1] < Ycenter) {
            ctx.lineTo((Xcenter - (Xcenter - circleFloating[randomLines[i]][0]) * linesWidth), (Ycenter - (Ycenter - circleFloating[randomLines[i]][1]) * linesWidth));

        } else if (circleFloating[randomLines[i]][0] > Xcenter && circleFloating[randomLines[i]][1] < Ycenter) {
            ctx.lineTo((Xcenter + (circleFloating[randomLines[i]][0] - Xcenter) * linesWidth), (Ycenter - (Ycenter - circleFloating[randomLines[i]][1]) * linesWidth));

        } else if (circleFloating[randomLines[i]][0] < Xcenter && circleFloating[randomLines[i]][1] > Ycenter) {
            ctx.lineTo((Xcenter - (Xcenter - circleFloating[randomLines[i]][0]) * linesWidth), (Ycenter + (circleFloating[randomLines[i]][1] - Ycenter) * linesWidth));
        }
        if (canvas.classList.contains('canv-on-gray')) {
            ctx.strokeStyle = "#313338";
        } else if (canvas.classList.contains('canv-on-blue')) {
            ctx.strokeStyle = "#538dd3";
        } else {
            ctx.strokeStyle = "#252525";
        }
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();


        ctx.beginPath();
        ctx.arc((Xcenter + (circleFloating[randomLines[i]][0] - Xcenter) * linesWidth), (Ycenter + (circleFloating[randomLines[i]][1] - Ycenter) * linesWidth), 3, 0, Math.PI * 2, false);
        // ctx.arc((Xcenter - (Xcenter - circleFloating[randomLines[i]][0]) * linesWidth), (Ycenter - (Ycenter - circleFloating[randomLines[i]][1]) * linesWidth), 3, 0, Math.PI * 2, false);
        // ctx.arc((Xcenter + (circleFloating[randomLines[i]][0] - Xcenter) * linesWidth), (Ycenter - (Ycenter - circleFloating[randomLines[i]][1]) * linesWidth), 3, 0, Math.PI * 2, false);
        // ctx.arc((Xcenter - (Xcenter - circleFloating[randomLines[i]][0]) * linesWidth), (Ycenter + (circleFloating[randomLines[i]][1] - Ycenter) * linesWidth), 3, 0, Math.PI * 2, false);
        if (canvas.classList.contains('canv-on-gray')) {
            ctx.fillStyle = '#313338';
        } else if (canvas.classList.contains('canv-on-blue')) {
            ctx.fillStyle = "#538dd3";
        } else {
            ctx.fillStyle = '#252525'
        }
        ctx.fill();
        if (canvas.classList.contains('canv-on-gray')) {
            ctx.strokeStyle = '#313338';
        } else if (canvas.classList.contains('canv-on-blue')) {
            ctx.strokeStyle = "#538dd3";
        } else {
            ctx.strokeStyle = '#252525';
        }
        ctx.stroke();
        ctx.closePath();
    }
}

var randValDotts = Math.random();

function drawCircle() {
    for (i = 0; i < circle.length; i++) {
        ctx.beginPath();
        ctx.moveTo(circleFloating[i][0], circleFloating[i][1]);
        if (i > 0) {
            ctx.lineTo(circleFloating[i - 1][0], circleFloating[i - 1][1]);
        } else {
            ctx.lineTo(circleFloating[0][0], circleFloating[0][1]);
        }
        if (i > numberOfSides) {
            if (canvas.classList.contains('canv-on-gray')) {
                ctx.strokeStyle = "#404146";
            } else if (canvas.classList.contains('canv-on-blue')) {
                ctx.strokeStyle = "#346dd1";
            } else {
                ctx.strokeStyle = "#141516";
            }
            ctx.lineWidth = 1.8;
            ctx.stroke();
            ctx.closePath();
        } else {
            if (canvas.classList.contains('canv-on-blue')) {
                ctx.strokeStyle = "#538dd3";
            } else {
                ctx.strokeStyle = "#252525";
            }
            ctx.lineWidth = 1.8;
            ctx.stroke();
            ctx.closePath();
        }
        ctx.beginPath();

        if (i > numberOfSides) {
            ctx.arc(circleFloating[i][0], circleFloating[i][1], 3, 0, Math.PI * 2, false);
            if (circleFloating[i][4] > 0.7) {
                ctx.fillStyle = '#1f59d1'
                ctx.strokeStyle = '#1f59d1';
                if (canvas.classList.contains('canv-on-blue')) {
                    ctx.fillStyle = "#b3d6ff"
                    ctx.strokeStyle = '#b3d6ff';
                }
            } else {
                if (canvas.classList.contains('canv-on-gray')) {
                    ctx.fillStyle = '#404146'
                    ctx.strokeStyle = '#404146';
                } else if (canvas.classList.contains('canv-on-blue')) {
                    ctx.fillStyle = "#346dd1"
                    ctx.strokeStyle = '#346dd1';
                } else {
                    ctx.fillStyle = '#141516'
                    ctx.strokeStyle = '#141516';
                }
            }
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.arc(circleFloating[i][0], circleFloating[i][1], 3, 0, Math.PI * 2, false);
            if (canvas.classList.contains('canv-on-blue')) {
                ctx.fillStyle = "#538dd3"
                ctx.strokeStyle = '#538dd3';
            } else {
                ctx.fillStyle = '#252525'
                ctx.strokeStyle = '#252525';
            }
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function floatingCoordinates() {

    for (i = 0; i < circle.length; i++) {

        if (circleFloating[i][0] === circle[i][0]) {
            if (Math.random() > 0.5) {
                circleFloating[i][2] = "right";
            } else {
                circleFloating[i][2] = "left";
            }
        }

        if (circleFloating[i][0] <= circle[i][0] - floatingAmount) {
            circleFloating[i][2] = "right";
        } else if (circleFloating[i][0] >= circle[i][0] + floatingAmount) {
            circleFloating[i][2] = "left";
        }

        if (circleFloating[i][2] == "right") {
            circleFloating[i][0] = circleFloating[i][0] + Math.random() / pointSpeedFactor;
        } else if (circleFloating[i][2] == "left") {
            circleFloating[i][0] = circleFloating[i][0] - Math.random() / pointSpeedFactor;
        }
        if (circleFloating[i][1] === circle[i][1]) {
            if (Math.random() > 0.5) {
                circleFloating[i][3] = "up";
            } else {
                circleFloating[i][3] = "down";
            }
        }
        if (circleFloating[i][1] <= circle[i][1] - floatingAmount) {
            circleFloating[i][3] = "up";
        } else if (circleFloating[i][1] >= circle[i][1] + floatingAmount) {
            circleFloating[i][3] = "down";
        }

        if (circleFloating[i][3] == "up") {
            circleFloating[i][1] = circleFloating[i][1] + Math.random() / pointSpeedFactor;
        } else if (circleFloating[i][3] == "down") {
            circleFloating[i][1] = circleFloating[i][1] - Math.random() / pointSpeedFactor;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < circleFloating.length; i++) {
        if (circleFloating[i][0] < circle[i][0] - floatingAmount) {}
    }
    floatingCoordinates();
    drawCircle();
    drawlines();
    time++;
    setTimeout(function () {
        window.requestAnimationFrame(draw)
    }, 16);
}
draw();