// Get elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskTime = document.getElementById('task-time');
const taskList = document.getElementById('task-list');

// Add Task function
function addTask() {
    const taskText = taskInput.value;
    const taskDateTime = taskTime.value;

    if (taskText === '' || taskDateTime === '') {
        alert('Please enter both a task and a date/time');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${taskText} - ${new Date(taskDateTime).toLocaleString()}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Add task to list
    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = '';
    taskTime.value = '';

    // Mark task as complete
    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Edit task
    li.querySelector('.edit-btn').addEventListener('click', () => {
        const newTaskText = prompt('Edit task', taskText);
        const newTaskTime = prompt('Edit date/time (YYYY-MM-DDTHH:MM)', taskDateTime);

        if (newTaskText !== null && newTaskTime !== null) {
            li.querySelector('span').innerText = `${newTaskText} - ${new Date(newTaskTime).toLocaleString()}`;
        }
    });

    // Delete task
    li.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(li);
    });
}

// Add Task Event Listener
addTaskBtn.addEventListener('click', addTask);
