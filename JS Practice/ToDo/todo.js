let todoList = [{item: 'Sample Task', dueDate: '2025-12-29'}];
displayItems();

function addTodo() {
    const inputElement = document.querySelector('#todo-input');
    const dateElement = document.querySelector('#todo-date');
    const todoItem = inputElement.value;
    const todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    console.log('New TODO item:', todoItem);

    displayItems();
}

function displayItems() {
    const containerElement = document.querySelector('.todo-container');
    let newHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i];
        newHTML += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="todoList.splice(${i}, 1);
            displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHTML;
}