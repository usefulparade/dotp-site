var aboutModal = document.getElementById('aboutModal');
var aboutBtn = document.getElementById("aboutBtn");
var aboutClose = document.getElementsByClassName("close")[0];

aboutBtn.onClick = function(){
	debug.log("click!");
	aboutModal.style.maxWidth = "100px";
}

aboutClose.onClick = function(){
	aboutModal.style.maxWidth = "0px";
}

window.onClick = function(){
	if (event.target == aboutModal){
		aboutModal.style.display = "none";
	}
}