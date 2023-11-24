// "use strict";
const taskList = document.getElementById('taskList');

function createTask() {
	const newElement = document.createElement("li");
	const textOfNewElement = document.getElementById('inputBox');
	newElement.textContent = textOfNewElement.value;
	taskList.prepend(newElement);
	textOfNewElement.value = '';
}

document.querySelector('.btn').onclick = createTask;

// function checkTask(evt) {
// 	taskList.addEventListener('click', function(evt) {
// 		if (evt.target.tagName === 'LI') {
// 		// Код, который будет выполнен при клике на элемент <li>
// 		evt.target.classList.toggle('completed'); // переключение класса
// 	}
// 	});
// }

// taskList.addEventListener('click', checkTask);


taskList.addEventListener('click', function(evt) {
	if (evt.target.tagName === 'LI') {
	// Код, который будет выполнен при клике на элемент <li>
	evt.target.classList.toggle('completed'); // переключение класса
}
});