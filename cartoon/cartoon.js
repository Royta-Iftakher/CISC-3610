const canvas = document.getElementById('cartoonCanvas');
const ctx = canvas.getContext('2d');
document.addEventListener('DOMContentLoaded', function () {
    console.log('Canvas is loading', canvas);
    //This draws the sky
    ctx.fillStyle = '#87CEEB'; //light blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //This draws the sun
    drawCircle('#FFF200', 100, 100, 60, 2);

    //This draws the mountain range
    drawMountain('#607D8B', 0, 500, 150, 200, 350, 500); //mountain grey
    drawMountain('#607D8B', 150, 500, 300, 200, 450, 500);
    drawMountain('#607D8B', 300, 500, 450, 300, 550, 500);

    //This draws the dirt and green grass layer
    drawGround('#795548', 500, 200); //dirt brown
    drawGround('#4CAF50', 500, 575);
    drawHouse(500, 350, 200, 150);

    //This draws the sailboat
    drawBoat();

    //This draws the lake
    drawCircle('#3F51B5', 1000, 500, 300, 1);

    //This draws the fence, and the method uses a for-loop
    drawFence('#FFFBDD', 400, 450, 10);

    //This draws the various clouds in the sky
    drawCloud(300, 100, 20);
    drawCloud(700, 200, 20);
    drawCloud(1000, 100, 40);
    drawCloud(1250, 250, 20);

    //This is the caption text
    ctx.fillStyle = '#673AB7'; // purple
    ctx.font = '30px Times New Roman';
    ctx.fillText('What a beautiful day!', 550, 30);
});

//this function is used for the sun, the lake, and the boat
function drawCircle(color, x, y, size, rotation) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, rotation * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawBoat() {
    //bow
    drawCircle('brown', 1100, 450, 80, 1);

    //sail
    ctx.fillStyle = 'white'; // Light Steel Blue
    ctx.beginPath();
    ctx.moveTo(1000, 420);
    ctx.lineTo(1100, 300);
    ctx.lineTo(1200, 420);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'grey';
    ctx.fillRect(1098, 300, 3, 150);
}

function drawCloud(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x - radius, y, radius, 0, 2 * Math.PI);
    ctx.arc(x + 5, y - radius, radius - 1, 0, 2 * Math.PI);
    ctx.arc(x + 10 + radius, y, radius - 3, 0, 2 * Math.PI);
    ctx.arc(x + 5, y + 10, radius - 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
}

function drawMountain(color, p1x, p1y, p2x, p2y, p3x, p3y) {
    ctx.fillStyle = color; // Light Steel Blue
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.lineTo(p3x, p3y);
    ctx.closePath();
    ctx.fill();
}

function drawGround(color, groundLevel, layerHeight) {
    ctx.fillStyle = color;
    ctx.fillRect(0, groundLevel, canvas.width, canvas.height - layerHeight);
}

function drawHouse(x, y, width, height) {
    //This is the roof of the house
    ctx.fillStyle = '#880E4F';
    ctx.beginPath();
    ctx.moveTo(x - 5, y);
    ctx.lineTo(x + (width / 2), y - 105);
    ctx.lineTo(x + width + 5, y);
    ctx.closePath();
    ctx.fill();

    //This is the body of the house
    ctx.fillStyle = '#FF93B8'; // Gold
    ctx.fillRect(x, y, width, height);

    //The window of the house
    ctx.fillStyle = '#880E4F';
    ctx.fillRect(x + 38, y + 18, 54, 54);
    ctx.fillStyle = '#FFD700'; // Gold
    ctx.fillRect(x + 40, y + 20, 50, 50);

    //The door of the house
    ctx.fillStyle = '#880E4F';
    ctx.fillRect(x + 115, y + 50, 54, 100);
}

function drawFence(color, startX, startY, quantity) {
    ctx.fillStyle = color;
    var moveX = 0;
    //the For-Loop
    for (i = 0; i < quantity; i++) {
        ctx.fillRect(startX + moveX, startY, 10, 50);

        ctx.beginPath();
        ctx.moveTo(startX + moveX, startY);
        ctx.lineTo(startX + 5 + moveX, startY - 8);
        ctx.lineTo(startX + 10 + moveX, startY);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#E7E3C7';
        ctx.fillRect(startX - 5 + moveX, startY + 10, 20, 5)

        ctx.fillStyle = color;
        moveX += 20;
    }

}

