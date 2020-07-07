var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");

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
			changeColors(clickedColor);
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