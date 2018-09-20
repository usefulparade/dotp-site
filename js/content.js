var aboutToggle = false;
var aboutButton = document.getElementById("aboutButton");
var aboutContent = document.getElementById("aboutContent");

var getToggle = true;
var getButton = document.getElementById("getButton");
var getContent = document.getElementById("getContent");

var scoreButton = document.getElementById("scoreButton");
var scoreContent = document.getElementById("scoreContent");


aboutButton.addEventListener("click", function(event){
    event.preventDefault()
    console.log('click!');

	aboutContent.style.left = "0";
	getContent.style.left = "200%";
	scoreContent.style.left = "-200%";

	aboutContent.style.maxHeight = "600px";
	getContent.style.maxHeight = "0px";
	scoreContent.style.maxHeight = "0px";
});

getButton.addEventListener("click", function(event){
    event.preventDefault()
    console.log('click!');

    aboutContent.style.left = "-200%";
	getContent.style.left = "0";
	scoreContent.style.left = "200%";

	aboutContent.style.maxHeight = "0px";
	getContent.style.maxHeight = "600px";
	scoreContent.style.maxHeight = "0px";
});

scoreButton.addEventListener("click", function(event){
    event.preventDefault()
    console.log('click!');

    scoreContent.style.left = "0";
    aboutContent.style.left = "-200%";
	getContent.style.left = "200%";

	scoreContent.style.maxHeight = "600px";
	aboutContent.style.maxHeight = "0px";
	getContent.style.maxHeight = "0px";
});