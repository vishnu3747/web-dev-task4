const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
        li.addEventListener('click', toggleCompleted);
    }
}

// Function to delete a task
function deleteTask(event) {
    const li = event.target.parentElement;
    li.remove();
}

// Function to mark/unmark task as completed
function toggleCompleted(event) {
    const li = event.target.closest('li');
    li.classList.toggle('completed');
}

// Event listener for adding a new task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
