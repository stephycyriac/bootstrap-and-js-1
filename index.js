 const taskContainer = document.querySelector(".task_container");  
const globalStore=[];
 const generateNewCard =(taskData) => `
 <div class="col-md-6 col-lg-4" id=${taskData.id}>
 <div class="card">
 <div class="card-header d-flex justify-content-end gap-2">
   <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
   <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
 </div>
 <img src=${taskData.imageUrl} 
 class="card-img-top" alt="image">
 <div class="card-body fs-6">
   <h5 class="card-title"> ${taskData.taskTitle} </h5>
   <p class="card-text">${taskData.taskDescription}</p>
   <a href="#" class="btn btn-primary">${taskData.taskType}</a>
   <div class="card-footer">
     <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
   </div>
 </div>
 </div>
 </div>
  `; 
 const saveChanges = () => {
    const taskData = {
        id:`${Date.now()}`,
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("Tasktitle").value,
        taskType:document.getElementById("Tasktype").value,
        taskDescription:document.getElementById("Taskdescription").value,
    };
   
     taskContainer.insertAdjacentHTML("beforeend" ,generateNewCard(taskData));

     globalStore.push(taskData);
     localStorage.setItem("tasky",JSON.stringify({cards:globalStore}  ));
};

const loadInitialCardData = () => {
    const getCardData = localStorage.getItem("tasky");
    const {cards} = JSON.parse(getCardData);
    cards.map((cardObject) => {
        
     taskContainer.insertAdjacentHTML("beforeend" ,generateNewCard(cardObject));

     globalStore.push(cardObject);
    })
}