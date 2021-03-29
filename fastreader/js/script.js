const splitArray = (text) =>{
	const splitedArr = text.split(' ');
	return splitedArr;
}

function textInput(){
	
	let inputText = document.getElementById('input-text').value;
	const doneArr = splitArray(inputText);
	textOutput(doneArr);
}


function example(){
	const exampleArr = splitArray(`Данный текст идет со скоростью 250 слов в минуту, и вы можете читать его без затруднений 
	хотя в среднем люди в Росcии читают около 120-180 слов в минуту Пример`);
	document.getElementById('example-button').hidden = true;
	for (let i = 0;i < exampleArr.length;i++) {
	   (function(ind) {
	       setTimeout(function(){
	           document.getElementById('example').innerHTML = `${exampleArr[i]}`;
	       },500 + (240 * ind));
	   })(i);
	}
	setTimeout(() => document.getElementById('example-button').hidden = false, 7460);
}

let speed = 250;

function setSmSpeed(){
	speed = 500;
	document.getElementById('curSpeed').innerHTML = 60000/speed;
	console.log(60000/speed);
}
function setMdSpeed(){
	speed = 250;
	document.getElementById('curSpeed').innerHTML = 60000/speed;
	console.log(60000/speed);
}
function setLgSpeed(){
	speed = 200;
	document.getElementById('curSpeed').innerHTML = 60000/speed;
	console.log(60000/speed);
}
function textOutput(doneArr){
	for (let i = 0;i < doneArr.length;i++) {
	   (function(ind) {
	       setTimeout(function(){
	           document.getElementById('text').innerHTML = `${doneArr[i]}`;
	       }, 1000 + (speed * ind));
	   })(i);
	}
}