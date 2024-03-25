const canvas = document.getElementById('JSONCanvas');
const ctx = canvas.getContext('2d');

const myJSON = '{"name":["Apple", "Orangle", "Banana", "Kiwi", "Blueberry", "Grape"], "quantity":[20,10,15,5,5,10], "color":["red", "orange", "yellow", "green", "blue", "purple"]}';
const fruits = JSON.parse(myJSON);
const NUMBER_OF_ROWS = 6
var changeX = 0;
var changeY = 0;
const startX = 100;
const startY = 75;

document.addEventListener('DOMContentLoaded', function () {
    console.log('Canvas is loading', canvas);

    ctx.fillStyle = "black"; // purple
    ctx.font = '16px Times New Roman';
    // ctx.fillText('JSON Fruit Chart', 250, 16);
    ctx.fillText("JSON Fruit Lab", 250, 30);

    // drawRect(100,50,"red");
    drawBarGraph();

});

function drawRect(valx, valy, color){
    ctx.fillStyle = color;
    ctx.fillRect(valx, valy, 50, 40);
}

function drawBarGraph(){
    for(i =0; i<NUMBER_OF_ROWS; i++){
        
        for(j =0; j < fruits.quantity[i]; j++){
            drawRect(startX+changeX, startY+changeY, fruits.color[i]);
            changeX+=20;
            ctx.fillStyle = "black"; // purple
            ctx.font = '16px Times New Roman';
        }
        ctx.fillText(fruits.quantity[i], startX+changeX+40, startY+changeY+20);
        ctx.fillText(fruits.color[i], startX-50, startY+changeY+20);
        changeY += 50;
        changeX = 0;
    }
}
// function that gets the value and color, draws a rectangle of that size.
// number of rectangles depends on the value of the array