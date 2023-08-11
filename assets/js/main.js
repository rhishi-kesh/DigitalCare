let lesstext = document.getElementById('lesstext');
let readmorebtn = document.getElementById('readmorebtn');

readmorebtn.onclick = function(){
	lesstext.classList.toggle('more');
	if(readmorebtn.innerHTML == 'Read More'){
		readmorebtn.innerHTML = 'Read Less';
	}else{
		readmorebtn.innerHTML = 'Read More';
	}
}

let lesstext1 = document.getElementById('lesstext1');
let readmorebtn1 = document.getElementById('readmorebtn1');

readmorebtn1.onclick = function(){
	lesstext1.classList.toggle('more');
	if(readmorebtn1.innerHTML == 'Read More'){
		readmorebtn1.innerHTML = 'Read Less';
	}else{
		readmorebtn1.innerHTML = 'Read More';
	}
}

let lesstext2 = document.getElementById('lesstext2');
let readmorebtn2 = document.getElementById('readmorebtn2');

readmorebtn2.onclick = function(){
	lesstext2.classList.toggle('more');
	if(readmorebtn2.innerHTML == 'Read More'){
		readmorebtn2.innerHTML = 'Read Less';
	}else{
		readmorebtn2.innerHTML = 'Read More';
	}
}

let lesstext3 = document.getElementById('lesstext3');
let readmorebtn3 = document.getElementById('readmorebtn3');

readmorebtn3.onclick = function(){
	lesstext3.classList.toggle('more');
	if(readmorebtn3.innerHTML == 'Read More'){
		readmorebtn3.innerHTML = 'Read Less';
	}else{
		readmorebtn3.innerHTML = 'Read More';
	}
}

let back_to_top = document.getElementById('back_to_top');
window.onscroll = function(){
	back_to_top.classList.toggle('show', window.scrollY > 200)
}