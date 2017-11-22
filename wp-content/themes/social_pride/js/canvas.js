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

        var colorBlack1R = 0;
        var colorBlack1G = 0;
        var colorBlack1B = 0;

        var colorBlack2R = 0;
        var colorBlack2G = 0;
        var colorBlack2B = 0;

        var colorBlack3R = 0;
        var colorBlack3G = 0;
        var colorBlack3B = 0;

        var colorBlack4R = 0;
        var colorBlack4G = 0;
        var colorBlack4B = 0;

        var colorBlack5R = 0;
        var colorBlack5G = 0;
        var colorBlack5B = 0;

function drawlines() {
    for (var i = 0; i < randomLinesAmount; i++) {
    if (canvas.classList.contains('canv-on-gray')) {
        var colorBlack5R1 = 37;
        var colorBlack5G1 = 37;
        var colorBlack5B1 = 37;
        
    } else if (canvas.classList.contains('canv-on-blue')) {
        var colorBlack5R1 = 83;
        var colorBlack5G1 = 141;
        var colorBlack5B1 = 211;
    } else {
        var colorBlack5R1 = 37;
        var colorBlack5G1 = 37;
        var colorBlack5B1 = 37; 
    }
        if(colorBlack5R>colorBlack5R1){colorBlack5R=colorBlack5R-0.1}
        if(colorBlack5R<colorBlack5R1){colorBlack5R=colorBlack5R+0.1}
        
        if(colorBlack5G>colorBlack5G1){colorBlack5G=colorBlack5G-0.1}
        if(colorBlack5G<colorBlack5G1){colorBlack5G=colorBlack5G+0.1}
        
        if(colorBlack5B>colorBlack5B1){colorBlack5B=colorBlack5B-0.1}
        if(colorBlack5B<colorBlack5B1){colorBlack5B=colorBlack5B+0.1}
        
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
        ctx.strokeStyle = "rgb("+colorBlack5R+","+colorBlack5G+","+colorBlack5B+")";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();


        ctx.beginPath();
        ctx.arc((Xcenter + (circleFloating[randomLines[i]][0] - Xcenter) * linesWidth), (Ycenter + (circleFloating[randomLines[i]][1] - Ycenter) * linesWidth), 3, 0, Math.PI * 2, false);
        ctx.fillStyle ="rgb("+colorBlack5R+","+colorBlack5G+","+colorBlack5B+")";
        ctx.fill();
        ctx.strokeStyle = "rgb("+colorBlack5R+","+colorBlack5G+","+colorBlack5B+")";
        ctx.stroke();
        ctx.closePath();
    }
}

var randValDotts = Math.random();

function drawCircle() {
    if (canvas.classList.contains('canv-on-gray')) {
        var colorBlack1R1 = 64;
        var colorBlack1G1 = 65;
        var colorBlack1B1 = 46;
        
        var colorBlack2R1 = 37;
        var colorBlack2G1 = 37;
        var colorBlack2B1 = 37;
        
        var colorBlack3R1 = 31;
        var colorBlack3G1 = 89;
        var colorBlack3B1 = 209;

        var colorBlack4R1 = 64;
        var colorBlack4G1 = 65;
        var colorBlack4B1 = 70;
        
    } else if (canvas.classList.contains('canv-on-blue')) {
        var colorBlack1R1 = 52;
        var colorBlack1G1 = 109;
        var colorBlack1B1 = 209;
        
        var colorBlack2R1 = 83;
        var colorBlack2G1 = 141;
        var colorBlack2B1 = 211;
        
        var colorBlack3R1 = 179;
        var colorBlack3G1 = 214;
        var colorBlack3B1 = 255;

        var colorBlack4R1 = 52;
        var colorBlack4G1 = 109;
        var colorBlack4B1 = 209;
    } else {
        var colorBlack1R1 = 37;
        var colorBlack1G1 = 37;
        var colorBlack1B1 = 37;
        
        var colorBlack2R1 = 37;
        var colorBlack2G1 = 37;
        var colorBlack2B1 = 37;
        
        var colorBlack3R1 = 31;
        var colorBlack3G1 = 89;
        var colorBlack3B1 = 209;

        var colorBlack4R1 = 20;
        var colorBlack4G1 = 21;
        var colorBlack4B1 = 22;    
    }
      
        if(colorBlack1R>colorBlack1R1){colorBlack1R=colorBlack1R-1}
        if(colorBlack1R<colorBlack1R1){colorBlack1R=colorBlack1R+1}
        
        if(colorBlack1G>colorBlack1G1){colorBlack1G=colorBlack1G-1}
        if(colorBlack1G<colorBlack1G1){colorBlack1G=colorBlack1G+1}
        
        if(colorBlack1B>colorBlack1B1){colorBlack1B=colorBlack1B-1}
        if(colorBlack1B<colorBlack1B1){colorBlack1B=colorBlack1B+1}
        ///////////////////////////////////////////////////////////
        if(colorBlack2R>colorBlack2R1){colorBlack2R=colorBlack2R-1}
        if(colorBlack2R<colorBlack2R1){colorBlack2R=colorBlack2R+1}
        
        if(colorBlack2G>colorBlack2G1){colorBlack2G=colorBlack2G-1}
        if(colorBlack2G<colorBlack2G1){colorBlack2G=colorBlack2G+1}
        
        if(colorBlack2B>colorBlack2B1){colorBlack2B=colorBlack2B-1}
        if(colorBlack2B<colorBlack2B1){colorBlack2B=colorBlack2B+1}
        ///////////////////////////////////////////////////////////
        if(colorBlack3R>colorBlack3R1){colorBlack3R=colorBlack3R-1}
        if(colorBlack3R<colorBlack3R1){colorBlack3R=colorBlack3R+1}
        
        if(colorBlack3G>colorBlack3G1){colorBlack3G=colorBlack3G-1}
        if(colorBlack3G<colorBlack3G1){colorBlack3G=colorBlack3G+1}
        
        if(colorBlack3B>colorBlack3B1){colorBlack3B=colorBlack3B-1}
        if(colorBlack3B<colorBlack3B1){colorBlack3B=colorBlack3B+1}
        ///////////////////////////////////////////////////////////
        if(colorBlack4R>colorBlack4R1){colorBlack4R=colorBlack4R-1}
        if(colorBlack4R<colorBlack4R1){colorBlack4R=colorBlack4R+1}
        
        if(colorBlack4G>colorBlack4G1){colorBlack4G=colorBlack4G-1}
        if(colorBlack4G<colorBlack4G1){colorBlack4G=colorBlack4G+1}
        
        if(colorBlack4B>colorBlack4B1){colorBlack4B=colorBlack4B-1}
        if(colorBlack4B<colorBlack4B1){colorBlack4B=colorBlack4B+1}
        


    for (i = 0; i < circle.length; i++) {
        ctx.beginPath();
        ctx.moveTo(circleFloating[i][0], circleFloating[i][1]);
        if (i > 0) {
            ctx.lineTo(circleFloating[i - 1][0], circleFloating[i - 1][1]);
        } else {
            ctx.lineTo(circleFloating[0][0], circleFloating[0][1]);
        }
        if (i > numberOfSides) {
            ctx.strokeStyle = "rgb("+colorBlack2R+","+colorBlack2G+","+colorBlack2B+")";
        } else {
            ctx.strokeStyle = "rgb("+colorBlack4R+","+colorBlack4G+","+colorBlack4B+")";
        }
        ctx.lineWidth = 1.8;
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();

        if (i > numberOfSides) {
            ctx.arc(circleFloating[i][0], circleFloating[i][1], 3, 0, Math.PI * 2, false);
            if (circleFloating[i][4] > 0.7) {
                ctx.fillStyle = "rgb("+colorBlack3R+","+colorBlack3G+","+colorBlack3B+")";
                ctx.strokeStyle = "rgb("+colorBlack3R+","+colorBlack3G+","+colorBlack3B+")";
            } else {
                ctx.fillStyle = "rgb("+colorBlack4R+","+colorBlack4G+","+colorBlack4B+")";
                ctx.strokeStyle = "rgb("+colorBlack4R+","+colorBlack4G+","+colorBlack4B+")";
            }
        } else {
            ctx.arc(circleFloating[i][0], circleFloating[i][1], 3, 0, Math.PI * 2, false);
            ctx.fillStyle = "rgb("+colorBlack2R+","+colorBlack2G+","+colorBlack2B+")";
            ctx.strokeStyle = "rgb("+colorBlack2R+","+colorBlack2G+","+colorBlack2B+")";
        }
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
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
