/*I affirm that all code given below was written solely by me, Sparsh Rawlani, and that any help I received adhered to
the rules stated for this exam.*/

window.onload = function() {
    grid.run()
}

// two arrays, first one defines some bunch of colors and second one takes in other colors
// Object Name: Grid
// has multiple functions that generates random colors and the time function that changes colors 
//every 20 milliseconds. 
var grid = (function(){
	var colors = ["red", "blue", "green", "pink", "orange", "yellow", "purple", "coral","Brown"]
	var changed = []

    // function: RandomColor
    // generates a random number between 1 and 7 because there are 8 colors and assigns it to a 
    // specific square
	function RandomColor(square){
		var NewColor;
		while(NewColor != true){
			var randIndex = randomInteger(0, colors.length - 1);
			var randColor = colors[randIndex];
			NewColor = presentColor(square, randColor);
		}
		square.style.background = randColor;
	}

    // function: presentColor
    // checks the present color and returns the square in which there is no color by using a not 
    // not operator.
	function presentColor(square, color){
		return !(square.style.background === color);
	}

    // function: randomSquare
    // makes sure that colors are assigned to all the 64 squares and changes the color 
    // by generating numbers between 1 and 64 and assiging colors to numbers and then the numbers to
    // the square.
	function randomSquare(){
		var newSquare, changedColor;
		while(newSquare != false){
			var randNum = randomInteger(1, 64);
			changedColor = "square-" + randNum;
			newSquare = newChange(changedColor);
		}
		changed.push(changedColor);
		timefunc(changedColor);
		return document.getElementById(changedColor);
	}

	
    // function: newChange
    // checks if the color in each square has been changed or not. If yes than changes the color again using the changeColor function 
    // and if not, then returns false and assigns a random color.
	function newChange(changedColor){
		if(changed.includes(changedColor)){
			return true;
		} else {
			return false;
		}
	}

	
    // function: timefunc
    // the color in each squares keeps changing @ of 10 milli seconds/square
	function timefunc(changedColor){
		setTimeout(function(){
			var index = changed.indexOf(changedColor);
			changed.splice(index);
		})
    }

	// function: changeColor
    // this function targerts the specific square and changes the color
	function changeColor(interval){
		var target = randomSquare();
		RandomColor(target);
		setTimeout(function(){changeColor(interval)} ,interval);
	}

	// function: randomInteger
    // uses the Math property of js to generate the random number and assign it to the any one of those colors inside the array.
	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	// the main object returns the time period with which the changeColor function should change the color.
	return{
		run: function(){
			setTimeout(function(){changeColor(10)} ,10);
		}
	}
})(); 
// end of code.