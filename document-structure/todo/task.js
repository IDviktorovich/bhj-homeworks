const form = document.forms.form;
const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    taskList.insertAdjacentHTML("beforeend", `<div class="task">
    <div class="task__title">
      ${taskInput.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`);

    let tasks = document.querySelectorAll('.task');

    let lastTask = tasks[tasks.length-1];

    let taskClose = lastTask.querySelector('.task__remove');

    taskClose.addEventListener('click', () => {
        lastTask.remove();
    })
})

