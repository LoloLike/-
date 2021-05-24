let input = document.querySelector('input');

input.onkeypress = function(event) {
	if (event.keyCode == 13 && input.value != '') {
		let li = document.createElement('li');
		let span = document.createElement('span');
		let img = document.createElement('img');
		img.setAttribute('src', 'icons/garbage.svg');
		li.appendChild(img);
		span.innerHTML = input.value;
		li.appendChild(span)
		document.querySelector('ul').appendChild(li);
		input.value = '';
	}; 
};

document.querySelector('ul').onclick = function(event) {
	let target = event.target;
	if (target.tagName === 'LI') {
		target.classList.toggle('checked')
	}  else if (target.tagName === 'IMG') {
		target.parentElement.remove();
	};
};

document.querySelector('.finish').onclick = function() {
	let lis = document.querySelector('ul').querySelectorAll('li'); 
	for (let i = 0; i < lis.length; i = i + 1) {
		lis[i].classList.add('checked');
	}
}

document.querySelector('.clear').onclick = function() {
	document.querySelector('ul').innerHTML = '';
}
