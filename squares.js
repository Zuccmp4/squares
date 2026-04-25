//COMMIT EACH TIME YOU DO A QUESTION FOR THE HW

let squareArea = document.querySelector("#squarearea");

let squareCount = parseInt(Math.random()*21)+30; // 30-50

//Make variable to really big z index
let increaseZIndex = 1001;

for (let i = 0; i<squareCount; i++){
    //make a square
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650) + "px";
    square.style.top = parseInt(Math.random()*250) + "px";
    square.style.backgroundColor = getRandomColor();
    square.style.zIndex = 0;
    
    //I can put a onclick and a function(this)
    square.onclick = function(){
        clickedSquare(this);
    };

    squareArea.append(square);
}


// if the z index of the square selected is 
        // already in the front remove the square or bring to front
let clickedSquare = function(square){

        if (square.style.zIndex == increaseZIndex - 1)
        {
            square.remove();
        } else {
            square.style.zIndex = increaseZIndex;
            increaseZIndex++;
        }


}


function getRandomColor(){
    // make a color string
    let color = "#";
    let letters = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++){
        color += letters.charAt(parseInt(Math.random()*letters.length));
    }
    //return that string
    return color;
}

//Make a function to add one square
//Make sure I set that as the onclick for the button

function addSquare(){

    let newSquare = document.createElement("div");
    
    newSquare.className = "square";
       
    newSquare.style.left = parseInt(Math.random()*650) + "px";
    newSquare.style.top = parseInt(Math.random()*250) + "px";
    newSquare.style.backgroundColor = getRandomColor();
    newSquare.style.zIndex = 0;

    newSquare.onclick = function(){
        clickedSquare(this);
    };

    squareArea.append(newSquare);

}

let newsquareButton = document.getElementById("addSquare");
newsquareButton.addEventListener("click", (addSquare));
document.getElementById("addSquare").onclick = addSquare;

//Make a function that changes all the colors of all the squares
//Make sure the button calls it
//
function changeColors(){
    //make an array
    let allSquares = document.querySelectorAll(".square");
    //For loop with index or For of loop
    //Change the color



}

//make a variable with giant number for the z-index
    //for when clicking on squares to bring them to the front

