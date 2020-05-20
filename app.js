let li = document.querySelectorAll('li');
let task = document.getElementById('new-task');
let taskBox = document.getElementById('task-box');
let ul = document.querySelector('ul');
let searchBox = document.querySelector('#search');

task.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
searchBox.addEventListener('keyup', find);

function addItem(e) {
	e.preventDefault();
	if (taskBox.value.length > 0) {
		let liNew = document.createElement('li');
		liNew.appendChild(document.createTextNode(taskBox.value));
		liNew.classList.add('list-group-item');
		let delBtn = document.createElement('button');
		delBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
		delBtn.className = 'btn btn-danger delete float-right';
		liNew.appendChild(delBtn);
		ul.appendChild(liNew);
		taskBox.value = '';
	}
}

function removeItem(e) {
	if(e.target.classList.contains('delete')) {
		if(confirm('Are you sure you want to delete this?')) {
			ul.removeChild(e.target.parentElement);
		}
	}
}

function find(e) {
	let input = e.target.value.toLowerCase();
	let listItems = Array.from(ul.children);
	listItems.forEach((element) => {
		if (element.firstChild.textContent.toLowerCase().indexOf(input) != -1) {
			element.style.display = 'block';
		} else {
			element.style.display = 'none';
		}
	})
}