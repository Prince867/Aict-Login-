




document.getElementById('form-Task').addEventListener('submit', saveTask);

// Save new To-Do
function saveTask(e) {

  let title = document.getElementById('title').value;
  //let title4 = document.getElementById('title4').value;
  let description = document.getElementById('description').value;


  let task = {
    title,
   // title4,
    description
  };

  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();

  // Reset form-Task
  document.getElementById('form-Task').reset();
  e.preventDefault();

}

// Delete To-Do 
function deleteTask(title) {

  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}
// Show To-Do List
function getTasks() {

  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    //let title4 = tasks[i].title4;
    let description = tasks[i].description;

    tasksView.innerHTML +=

    ` <div class= "io">
    
    
      <h5 class="mt-2 text-capitalize">${description}</h5>
      <p>${title}</p>
        
       
        
<p>
  
  <button data-toggle="collapse"  data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  <i class="fas fa-caret-down"></i>
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="nihu">
  <p onclick="deleteTask('${title}')">Logout</p>
  </div>
</div>
          
         </div>
    
      `;
  }

}
getTasks();

//drawer body collapse---
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("id").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("id").style.width = "0"
}





//switch case------
function check(){
    //     var selbranch = document.getElementById("title");
    //     var selectedValue = selbranch.value;
    
    // switch(selectedValue){
    //    case 'Computer Science' : window.open('department/CSE.html');
    //    break;
       
    //    case 'civil' : window.open('department/civil.html');
    //    break;

    //    case 'Electronic and communication' : window.open('department/EC.html');
    //    break;
       
    //    case 'Mechenical science' : window.open('department/ME.html');
    // }

numOne = parseInt(document.getElementById("title").value);
  
if(numOne<=190641010000){

 document.getElementById('it').innerHTML = `<div class="alert alert-warning" role="alert">
     plaese enter correct roll no.
  </div>`;
}
else if (numOne<=1906410100070){
  window.open('civil.html',"_self");
}

else if (numOne<=19064102000034){
  window.open('ec.html',"_self");
}
else{
  document.getElementById('it').innerHTML =`<div class="alert alert-warning" role="alert">
    plase enter your name .
  </div>`;

}
    
}
//for showing massgage pop up masg is infut firl is field or not---

// function check() { 
//  var first = document.getElementById("description").value;
//  var second = document.getElementById("title").Value ;
//   if(!first){
  
//   document.getElementById('it').innerHTML =`<div class="alert alert-warning" role="alert">
//      plaese enter first value .
//   </div>`;
//   }
//   else if(!second) {
//       document.getElementById('it').innerHTML =`<div class="alert alert-warning" role="alert">
//   Please fill 2nd value.
//   </div>`;
//   }

//  else{
//     document.getElementById('it').innerHTML =`<div class="alert alert-warning" role="alert">
// Please fill 2nd dfgbvalue.
// </div>`;
// }

//   }

//redload window

  function niki(){
    location.reload()
  }