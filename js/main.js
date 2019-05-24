var isNavOpen = false;
var navTop = document.getElementById('nav-top');

document.getElementById('nav-btn').addEventListener('click', function () {
	// The code in here will be run every time the user clicks our button
	if(isNavOpen){
		navTop.className = 'nav-hidden';
		isNavOpen = false;
	} else{
		navTop.className = '';
		isNavOpen = true;
	}
}, false);// JavaScript Document