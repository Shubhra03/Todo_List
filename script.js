const itemArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[]
const completetask = localStorage.getItem("complete") ? JSON.parse(localStorage.getItem("complete")):[]
const incompletetask = localStorage.getItem("incomplete") ? JSON.parse(localStorage.getItem("incomplete")):[]

console.log(itemArray);
window.onload = function(){
    displayDate();
    displayItem();
    displayContent();
}


//this is the selection event of all task,completed task
function displayContent(){
    var activities = document.getElementById("filter-todo");
   
    activities.addEventListener("click", function() {
        // location.reload()
        var options = activities.querySelectorAll("option");
        var count = options.length;
        if(typeof(count) === "undefined" || count < 4)
        {
           console.log("yes");
        }
    });
    
    activities.addEventListener("change", function() {
        if(activities.value == "complete")
        {
         console.log("completed");  
     //   displayItem1(); 
        }
    });

    activities.addEventListener("change", function() {
        if(activities.value == "all")
        {
           
    // displayItem();
   
        }
    });

    activities.addEventListener("change", function() {
        if(activities.value == "incomplete")
        {
         console.log("incompleted");   
        }
    });
   
 
}

function displayDate(){
    let date = new Date()
    date=date.toString().split(" ")
    const v1 =date[1]+" "+date[2]+" "+date[3];
    const dt = document.querySelector("#date");

    const date_el = document.createElement("h6");
    date_el.classList.add("datel");
    date_el.innerHTML=v1;
    dt.appendChild(date_el);

}

function displayItem(){
    for (let index = 0; index < itemArray.length; index++) {
        const element = itemArray[index];
        myFun(element,index);
    }
}
function createItem(item){
    itemArray.push(item);
    localStorage.setItem("items",JSON.stringify(itemArray))
    displayItem();
    window.location.reload();
}


// function displayItem1(){
//     for (let index = 0; index < completetask.length; index++) {
//         const element = completetask[index];
//         myFun(element,index);
//     }
// }
// function createItem1(item1){
//     completetask.push(item1);
//     localStorage.setItem("complete",JSON.stringify(completetask))
//     displayItem1();
//     window.location.reload();
// }


window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");  
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
        const task = input.value;
        createItem(task);
    });
});
//-----------------------------------------------------------------


function myFun(task,index){
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");
if(!task){
    alert("fill out the task");
    return;
}
const task_el  = document.createElement("div");
task_el.classList.add("task");

const task_content_el = document.createElement("div");
task_content_el.classList.add("content");

const task_input_el=document.createElement("input");
task_input_el.type="text";
task_input_el.classList.add("text");
task_input_el.value=task;
task_input_el.setAttribute("readonly" , "readonly");

task_content_el.appendChild(task_input_el);
task_el.appendChild(task_content_el);


const task_action_el = document.createElement("div");
task_action_el.classList.add("actions");

const task_edit_el = document.createElement("button");
task_edit_el.classList.add("edit");
task_edit_el.innerHTML="Edit";


const task_delete_el = document.createElement("button");
task_delete_el.classList.add("delete");
task_delete_el.innerHTML="Delete";

task_action_el.appendChild(task_edit_el);
task_action_el.appendChild(task_delete_el);
task_el.appendChild(task_action_el);
list_el.appendChild(task_el);


//complete
task_input_el.addEventListener('click',()=>{
    task_input_el.classList.add('taskcomplete');
    itemArray.splice(index,1)
localStorage.setItem('items', JSON.stringify(itemArray))
});

// edit 
task_edit_el.addEventListener('click',()=>{
if(task_edit_el.innerText.toLowerCase()== "edit"){
task_input_el.removeAttribute("readonly");

task_input_el.focus();
task_edit_el.innerText="Save";
}
else{
task_input_el.setAttribute("readonly","readonly");
task_edit_el.innerHTML="Edit";
itemArray[index] = task_input_el.value;
localStorage.setItem('items', JSON.stringify(itemArray))
location.reload()
}
});
// //delete
task_delete_el.addEventListener('click',()=> {
list_el.removeChild(task_el);
itemArray.splice(index,1)
localStorage.setItem('items', JSON.stringify(itemArray))
location.reload()

});

//tick

}
