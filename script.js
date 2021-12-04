'use strict';

import { DELETE_TASK, ADD_TASK, CHECKED, TASK_CLONE, INPUT, } from './view.js';



function deleteTask() {
	this.parentElement.remove();
}

for (let task of DELETE_TASK) {
	task.addEventListener('click', deleteTask)
}

function checkTask() {
	this.classList.toggle('active');
	if (this.classList.contains('active')) {
		this.parentElement.parentElement.style.backgroundColor = '#f4f4f4'
	} else this.parentElement.parentElement.style.backgroundColor = '#fff'
}

for (let task of CHECKED) {
	task.addEventListener('click', checkTask)
}

function addTask() {
	let cloneTask = TASK_CLONE.cloneNode(true);
	let deleteClone = cloneTask.querySelector('.todo__delete-icon');
	let ckeckClone = cloneTask.querySelector('.todo__checkbox');
	deleteClone.addEventListener('click', deleteTask);
	ckeckClone.addEventListener('click', checkTask);
	this.parentElement.parentElement.append(cloneTask);
	cloneTask.querySelector('.todo__text').innerHTML = this.parentElement.firstElementChild.value;
	INPUT.forEach(INPUT => INPUT.form.reset());
	if (cloneTask.querySelector('.todo__text').innerHTML === '') return;
	cloneTask.classList.add('todo__task-new');
}

for (let task of ADD_TASK) {
	task.addEventListener("click", addTask)
}