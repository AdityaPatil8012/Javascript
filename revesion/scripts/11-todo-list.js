const todoList = [];

renderTodoList();

function renderTodoList(){

  let todoListHTML = '';

  for(let i = 0; i< todoList.length; i++){
    const todo = todoList[i];
    const html = `
      <p>
        ${todo}
        <button onclick = "
          todoList.splice(${i}, 1);
          renderTodoList();
        ">Delete</button>  
      </p>
    `;
    todoListHTML += html;
  }
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function newItem(){
const inputElement = document.querySelector('.js-addNew');
const item = inputElement.value;
todoList.push(item);
console.log(todoList);
inputElement.value = '';
renderTodoList();
}
