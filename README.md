# **README JS TODOLIST**
 
## **TODOLIST**
## **Introduction**
 
This exercise demonstrates the basics of dynamic task management in JavaScript. It focuses on adding and deleting task cards by manipulating the DOM.
## **Main function of the project**

This function clone a task card, set a default value of "New Task," and append it to a container. Each card also includes a delete button to remove the task.
 

``` function addTask (){
  
      const newTask = taskCard.cloneNode(true) // Clone the task card 
      const newTextArea = newTask.querySelector('.delBtn') 
      const newDelBtn = newTask.querySelector('.task') 

       newTextArea.value = "New Task"  //  set new task to "New Task"
       // Add the delete functionality
       delBtn.addEventListener('click', function(){
        deleteTask(newTask);
     });



       taskContainer.appendChild(newTask)    // append new task to the tasks container
       countCard();
}
    
 
```
## **Display result**


![image](https://github.com/user-attachments/assets/8f833238-0486-44b8-897d-8bdc9575e72d)


 
## **if you have question about the project you can contact me on my [linkedIn]()**
