// --- Variables --- //
var button1 = document.getElementById('button1');
var button3 = document.getElementById('button3');
var container = document.getElementById('container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var map = document.getElementById('image');
var mappoint = 0;
var key = 0;	
var i = 0;
var afbeelding1 = 'map';
var flashlight = 0;

// --- Buttons ---//
button1.onclick = startGame;
button2.onclick = quit;	
button3.onclick = quest;
map.onclick = skip;
description.style.display = "none"

//------Main Menu------//
function mainMenu(){
	location.reload();
	container.classList.remove("finish");
	title.style.display = "block";
	button1.style.display = "block";
	button2.style.display = "block";
	button3.innerText = "Quest"
	button3.onclick = quest;
	button3.style.left = "10%";
	description.innerText = " ";
	description.style.display = "none";
	button1.AddEventListener("click", startGame, false);
	button1.onclick = "startGame";
}

function startGame(){
	if (mappoint === 0) {

		container.classList.remove("stuck","level2Right");
		button1.onclick = level2Right;
		button2.onclick = level2Left;
		container.classList.add('level1');
		description.classList.add('level1Text');
		button1.innerText = "Right";
		button1.style.left = "65%";
		button1.style.top = "75%";
		button2.innerText = "Left";
		button2.style.left = "20%";
		button2.style.display = "block";
		button3.style.display = "none";
		title.style.display = "none";
		description.style.display = "block";
		description.innerText = "Ah, looks like you are lost in the forest. You must find your way out. But be aware! Danger hides deep down... Choose a side you want to start your journey on.";
		map.style.display = "none";
	} 
	else if(mappoint === 1){
		skip();
	} 
}


function quit(){
	var close = document.getElementById('test');
	close = window.close();
}


function quest(){
	button1.style.display = "none";
	button2.innerText = "Swap Items";
	button2.onclick = imageSwap;
	button2.style.top = "75%";
	button2.style.left = "17%";
	map.style.left = "19%";
	map.style.opacity = "1";
	map.style.top = "50%";
	map.style.width = "100px";
	map.style.height = "100px";
	button3.innerText = "Go back"
	button3.onclick = mainMenu;
	button3.style.left = "80%";
	description.style.display = "block";
	description.innerText = "Your objective is to escape the Forest. \n Find your way through and escape! \n \n Items you can find:";
}

function skip() {
		map.classList.add('imageMap')
		mappoint = mappoint + 1;
		console.log(mappoint);
		title.style.display = "none";
		button1.style.display = "none";
		button2.style.display = "none";
		button3.innerText = "Continue";
		button3.style.left = "43%";
		map.style.top = "50%";
		description.style.display = "block";
		description.innerText = "You have found a map with the way out of the Forest. Hit 'Continue' to procceed towards the exit. ";
		description.classList.add("descriptionMap");
		button3.onclick = finishEE;
}

function finishEE() {
	container.classList.add('finish');	
	description.classList.add('finish')
	map.style.display = "none";
	description.innerText = "YOU ESCAPED!";
	description.fontSize = "100px";
	button3.onclick = mainMenu;
	description.style.left = "32%";
}

function imageSwap() {
	console.log(document.getElementById('image').src);
	if(afbeelding1 == 'map'){
		document.getElementById("image").src = 'images/flashlight.png';
		afbeelding1 = 'flashlight';
	}else if (afbeelding1 == 'flashlight'){
		document.getElementById('image').src = 'images/key.png';
		afbeelding1 = 'key';
	}else if (afbeelding1 == 'key'){
		document.getElementById('image').src = 'images/map.png';
		afbeelding1 = 'map';

	}
}

// --- First level --- //
function level2Right(){
	container.classList.add('level2Right');
	container.classList.remove('level3Right', 'level1');
	button1.style.display = "block";
	button2.style.display = "block";
	button2.style.left = "45%";
	button2.style.top = "55%";
	button2.innerText = "Forward"
	button1.onclick = level3Right;
	button2.onclick = flashlightCheck;
	description.innerText = "Another split. Choose your side to Continue your journey."
	description.style.left = "30%";
	if (key == 0){
		button3.style.display = "block";
		button3.onclick = startBack;
		button3.innerText = "Go back";
	}else if(key >=1){
		button3.style.display = "block";
		button3.onclick = startBack;
		button3.innerText = "Go back";
	}
}

function level2Left(){
	container.classList.remove('level1');
	container.classList.add('stuck');
	button1.onclick = startBack;
	button1.style.left = "80%";
	button2.style.display = "none";
	button1.innerText = "Go back"
	description.innerText = "Oh no, an obstacle has blocked your way. You must go back and find another way!";
	map.style.display = "block";
	document.getElementById('image').src = "images/key.png";
	map.style.left = "25%";
	map.style.top = "90%";
	map.onclick = Key;
}

function startBack(){
	container.classList.remove('stuck','level2Right');
	button2.onclick = level2Left;
	container.classList.add('level1');
	description.classList.add('level1Text');
	button1.innerText = "Right";
	button1.onclick = level2Right;
	button2.style.left = "20%";
	button3.style.display = "none";
	title.style.display = "none";
	if(key == 1){
		button2.style.display = "none";
		description.style.display = "block";
		description.innerText = "Hmmm, you must go right in order to procceed your journey.";
	} else if (key == 0){
		button2.style.display = "block";
		button2.innerText = "Left";
		map.style.display = "none";
		description.innerText = "Ah, looks like you are lost in the forest. You must find your way out. But be aware! Danger hides deep down... Choose a side you want to start your journey on.";
	}
}

// --- Second Level --- //
function level3Right() {
	container.classList.remove('level1','level2Right','insideHouse');
	container.classList.add('level3Right');
	button2.style.display = "block";
	button2.style.top = "75%";
	button2.onclick = test;
	button2.innerText = "Go back";
	button1.style.left = "45%";
	button1.style.top = "65%";
	button1.innerText = "Go inside";
	button1.onclick = keyCheck;
	description.innerText = "Ah a house, maybe there's something in here that'll help me!"
	description.style.left = "25%";
	button3.style.display = "none";
	if(flashlight == 0){
		button1.style.display = "block";
	}else if(flashlight >= 1){
		button1.style.display = "none";
	}
	map.style.display = "none";

}
function keyCheck(){
	if (key >= 1){
		insideHouse();
	}else if(key == 0){
		needKey();
	}
}

function needKey(){
	description.innerText = "You need a key to go inside the house. Find it!";
	button2.innerText = "Go back";
	button1.onclick = keyCheck;
	button2.style.display = "block";
	button2.style.top = "75%";
	button2.onclick = test;


}

function test(){
	startGame();
	level2Right();
}

function insideHouse(){
	document.getElementById("image").src = 'images/flashlight.png';
	map.style.display = "block";
	map.style.opacity = "0.8";
	map.style.top = "93%";
	map.style.left = "90%";
	map.onclick = flashLight;
	description.innerText = "You've made your way into the house, perhaps something is laying around that might be useful..."
	container.classList.add('insideHouse');
	container.classList.remove('level3Right');
	button1.innerText = "Go back";
	button1.onclick = level3Right;
	button2.style.display = "none";
}

function flashLight(){
	flashlight++;
	map.style.display = "none";
	description.innerText = "You've found a flashlight!";
	console.log(flashlight);
	button1.innerText = "Go back";
	button1.onclick = level3Right;

}

function Key(){
	key++;
	map.style.display = "none";
}

function flashlightCheck(){
	if(flashlight == 0){
		youDied();
	}else if(flashlight >=1){
		skip();
		finish();
	}
}

function youDied(){
	container.classList.add('youDied');
	description.style.display = "none";
	button1.style.display = "none";
	button3.style.display = "none";
	button2.innerText = "Try again";
	button2.onclick = mainMenu;
	button2.style.top = "75%"; 
}
function finish(){
	container.classList.add('finish');	
	description.classList.add('finish')
	map.style.display = "none";
	description.innerText = "YOU ESCAPED!";
	description.fontSize = "100px";
	button3.onclick = mainMenu;
	description.style.left = "20%";
}
