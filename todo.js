/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sakinur Rahman ( Learn with Sakin )
 * Date: 07/10/2021
 *
 */

 // select elements & assign them to variables
 let newTask = document.querySelector('#new-task');
 let form = document.querySelector('form');
 let todoUl = document.querySelector('#items');
 let completeUl = document.querySelector('.complete-list ul');
 let completeBtn = document.querySelector('.complete_btn');


// functions
let createTaskMeta = (task) => {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');

  //Set Check box type and class.
  checkBox.type = 'button';
  checkBox.value = "Complete"
  checkBox.className = "complete_btn"
  label.innerHTML = task;
  
  //Append New Elements on the into the li Tag.
  listItem.appendChild(label);
  listItem.appendChild(checkBox);
  
  //Return The Final Output
  return listItem;

}

let addNewTask = (event) => {
   event.preventDefault();
   let addFullNewTask = createTaskMeta(newTask.value);
   todoUl.appendChild(addFullNewTask);
   newTask.value = "";

  // bind the new list item to the incomplete list
  bindInCompleteItems(addFullNewTask, completeTask);

}


let bindInCompleteItems = function(taskItem, completeButtonClick) {
  let completeButton = taskItem.querySelector('.complete_btn');
  completeButton.onclick = completeButtonClick;
}


let completeTask = function() {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement('button');
  let unmarkBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  unmarkBtn.innerText = 'Unmark';
  deleteBtn.className = 'delete';
  unmarkBtn.className = 'unmark';
  listItem.appendChild(unmarkBtn);
  listItem.appendChild(deleteBtn);

  let completeButton = listItem.querySelector('.complete_btn');
  completeButton.remove();
  completeUl.appendChild(listItem);
  
  //Call the complete task function
  bindCompleteItems(listItem, deleteTask);
  bindUnmarkItems(listItem, unmark);
}


let bindCompleteItems = function(taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector('.delete');
  deleteButton.onclick = deleteButtonClick;
}

let deleteTask = function() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}

let bindUnmarkItems = function(completeItem, unmarkButtonClick) {
  let unmarkButton = completeItem.querySelector('.unmark');
  unmarkButton.onclick = unmarkButtonClick;
}

//Mark a complete task as incomplete Task.
let unmark = function () {
  let listItem = this.parentNode;

  let completeBtn = document.createElement('input');
  completeBtn.type = "button";
  completeBtn.value = "Complete";
  completeBtn.className = 'complete_btn';


  let deleteBtn = listItem.querySelector('.delete');
  deleteBtn.remove();
  let unmarkBtn = listItem.querySelector('.unmark');
  unmarkBtn.remove();


  listItem.appendChild(completeBtn);
  todoUl.appendChild(listItem);
}




//Make the exiting items dynamic.
for(let i=0; i< todoUl.children.length; i++ ) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}


for(let i=0; i< completeUl.children.length; i++ ) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}


for(let i=0; i< completeUl.children.length; i++ ) {
  bindUnmarkItems(completeUl.children[i], unmark);
}


//Submit the form.
form.addEventListener('submit', addNewTask);






// https://103.113.200.29/student_covidinfo





