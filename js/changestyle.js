function CloseMe() {
	// find element
	x=document.getElementById("demo");
	//change style instead of changing the innerHTML.
	x.style.display="none";

	//For option 2 change the class
	//x.className="closed";
}
function OpenMe(){
	x=document.getElementById("demo");
	x.style.display="block";

	//For option 2 change the class
	//x.className="open"
}