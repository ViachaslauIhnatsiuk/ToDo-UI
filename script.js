'use strict';

import { UI_ELEMENTS } from './view.js';

function deleteTask() {
	this.parentElement.remove();
}

UI_ELEMENTS.DELETE_TASK.forEach(item => item.addEventListener('click', deleteTask))

function checkTask() {
	this.classList.toggle('active');
	const ACTIVE_COLOR = '#f4f4f4';
	const INACTIVE_COLOR = '#fff';
	const color = this.classList.contains('active') ? ACTIVE_COLOR : INACTIVE_COLOR;
	this.parentElement.parentElement.style.backgroundColor = color;
}

UI_ELEMENTS.CHECKED.forEach(item => item.addEventListener('click', checkTask))

function addTask() {
	let cloneTask = UI_ELEMENTS.TASK_CLONE.cloneNode(true);
	let deleteClone = cloneTask.querySelector('.todo__delete-icon');
	let checkClone = cloneTask.querySelector('.todo__checkbox');
	deleteClone.addEventListener('click', deleteTask);
	checkClone.addEventListener('click', checkTask);
	this.parentElement.parentElement.append(cloneTask);
	cloneTask.querySelector('.todo__text').textContent = this.parentElement.firstElementChild.value;
	UI_ELEMENTS.INPUT.forEach(INPUT => INPUT.form.reset());
	if (cloneTask.querySelector('.todo__text').textContent === '') return;
	cloneTask.classList.add('todo__task-new');
}

UI_ELEMENTS.ADD_TASK.forEach(item => item.addEventListener('click', addTask))