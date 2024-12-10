const delBtn = document.querySelector(".delBtn");
const count = document.querySelector("#count");
const addBtn = document.querySelector("#btn");
const taskCard = document.querySelector(".todoCard");
 const taskContainer = document.querySelector("#todoCards");
 



 addBtn.addEventListener('click', addTask); // Add Task 
 delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
 });
 
 function deleteTask(task){
    task.remove();
    countCard()
 }

 function countCard() { // count the task card
    const nbCard = document.querySelectorAll(".todoCard").length;
    if(nbCard >=1){
        count.innerHTML = 'Card Number: '+nbCard;
    }
    else{
        count.innerHTML = 'No Task!'
    }        
}

countCard()


function addTask (){
       
      const newTask = taskCard.cloneNode(true) // Clone the task card 
      const newTextArea = newTask.querySelector('.delBtn') 
      const newDelBtn = newTask.querySelector('.task') 

       newTextArea.value = "New Task"  //  set new task to "New Task"
       delBtn.addEventListener('click', function(){
        deleteTask(newTask);
     });



       taskContainer.appendChild(newTask)    // append new task to the tasks container
       countCard();





}
//console.log(addTask);
console.log(addBtn);
console.log(addBtn.addEventListner , addTask);