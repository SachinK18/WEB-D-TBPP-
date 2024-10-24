document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('deleteAllBtn').addEventListener('click', deleteAllTasks);

function addTask() {
    const taskName = document.getElementById('taskNameInput').value.trim();
    const taskDesc = document.getElementById('taskDescInput').value.trim();
    const taskDate = document.getElementById('taskDateInput').value;

    if (taskName === '' || taskDate === '') {
        alert('Please enter a task name and select a day.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');

    const taskTitle = document.createElement('span');
    taskTitle.textContent = ${taskName} (Day ${taskDate});

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'task-btn';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(deleteBtn);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.textContent = taskDesc;

    taskItem.appendChild(taskHeader);
    taskItem.appendChild(taskDetails);
    taskList.appendChild(taskItem);

    
    document.getElementById('taskNameInput').value = '';
    document.getElementById('taskDescInput').value = '';
    document.getElementById('taskDateInput').value = '';
}

function deleteAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}