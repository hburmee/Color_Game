var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Difficulty level

// Easy button
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

// Hard Button
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} 
	}
})

//Reset Button
resetButton.addEventListener("click", function(){
	// //generate all new colors
	// colors = generateRandomColors(6);
	// //pick a new random color from array
	// pickedColor = pickedColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	location.reload();
	colors = generateRandomColors(numSquares);
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor = colors[i]

	//add click listener
	squares[i].addEventListener("click", function(){
		//grab color of the clicked square
	 var clickedColor = this.style.backgroundColor;
		//compare color to the picked color
		if (clickedColor == pickedColor) {
			messageDisplay.textContent = "correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}


	})

}

function changeColors(color) {
//loop through squares and change each color to match the given color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	//return that array
		return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}