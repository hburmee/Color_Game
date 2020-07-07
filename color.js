var colors = ["rgb(255, 0, 0)",
			  "rgb(255, 25, 0)",
			  "rgb(0, 0, 255)",
			  "rgb(255, 34, 55)",
			  "rgb(255, 55, 98)",
			  "rgb(255, 0, 0)"
			  ]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
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

