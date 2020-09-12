var fruits = ["banana", "apple", "strawberry"];
function loadFruits(){
	document.getElementById("fruits").innerHTML="fruits";
}
function myFunction(){
	var fruit =prompt("What is your favorite?");
	fruits[fruits.length]=fruit;
	document.getElementById("fruits").innerHTML="fruits";
}
