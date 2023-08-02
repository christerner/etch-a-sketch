let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){    
    
    let btnSelect = document.querySelector("#popup");
    btnSelect.addEventListener("click", function() {
        let size = getSize();
        if(size) {
            createBoard(size);
            document.querySelector(".board").addEventListener("click", function(e){
                if(e.target.tagName != "BUTTON") {
                    click = !click;
                    let draw = document.querySelector("#draw");
                    if(click) {
                        draw.innerHTML = "Drawing is now enabled";
                    }
                    else {
                        draw.innerHTML = "Drawing is now disabled. Click on the board to enable";
                    }
                }
            })
        }
        else {
            draw.innerHTML = ""
        }
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberOfDivs = size * size;

    for(let i = 0; i < numberOfDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
       
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Enter the size of the board...");
    let message = document.querySelector(".message");
    if(input == "") {
        message.innerHTML = "Please provide a number";
    }
    else if(isNaN(input)) {
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Please provide a number between 1 and 100";
    }
    else if(input > 0 || input < 100) {
        message.style.color = "blue";
        message.innerHTML = "Now you can draw. Click on the board to start";
        return input
    }    
}

const randomColor = function () {
    const R = Math.floor((Math.random() * 255) + 1);
    const G = Math.floor((Math.random() * 255) + 1);
    const B = Math.floor((Math.random() * 255) + 1);
    return `rgb(${R}, ${G}, ${B})`
}

function colorDiv() {    
    if(click) {
        if(color == "random") {
            this.style.backgroundColor = randomColor()
        } 
        else {
            this.style.backgroundColor = "black"
        }           
    }
}

function setColor(colorChoice) {
    color = colorChoice;    
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}