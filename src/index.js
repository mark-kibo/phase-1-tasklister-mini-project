//  deliverables 
//  add task
//  view task

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    buildToDo(e.target.querySelector('#new-task-description').value);
    form.reset();
  })
});


let buildToDo =(toDo)=>{
  let tasks=document.querySelector("#tasks");
  let list=document.createElement('li');
  let p = document.createElement('p');
  let deleteBtn=document.createElement('button');
  let editBtn=document.createElement('button');
  editBtn.innerHTML="edit"
  deleteBtn.innerHTML="X"
  editBtn.addEventListener("click", (e)=>{
    if(e.target.parentNode.id === ""){
      e.target.parentNode.querySelector('p').setAttribute('id', 'item')     
    }
    let item=document.getElementById(`${e.target.parentNode.querySelector('p').id}`)
    console.log(item);
    item.contentEditable =true;
    
  })
  
  deleteBtn.addEventListener("click", handleTask);

  // colors
  let colors = ['','red', 'yellow', 'green']
  // create our color section 
  let dropdown =document.createElement('select');
  


  for (let color of colors){
    let option = document.createElement('option');
    option.addEventListener("click", (e)=>{
      p.style.color=e.target.value;
    });
    if (color === " "){
      option.innerHTML=color;
      option.selected= true;
      dropdown.appendChild(option);
    }else{
      option.textContent = color
      dropdown.appendChild(option);
    }

  }


  
  p.textContent = `${toDo} `;
  list.appendChild(p);
  list.appendChild(dropdown);
  list.appendChild(deleteBtn);
  list.appendChild(editBtn)
  tasks.appendChild(list);
}

let handleTask=(e)=>{
  e.target.parentNode.remove();

}

