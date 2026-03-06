let listTask = [
    {name: `Quét nhà`},
    {name: `Lau nhà`},
    {name: `Rửa bát`},
];

let input = document.getElementById(`TaskInput`);
let btn = document.getElementById(`btn`);
let list = document.getElementById(`taskList`);
btn.addEventListener(`click`,createTask)
function createTask(){
    let Task = input.value.trim();
    let newTask = {
        name: Task,
    }
    listTask.push(newTask);
    input.value = ``;
    input.focus();
    console.log(listTask);
    displayTask();
    
}
function displayTask(){
    listTask.forEach(input =>{
        list.innerHTML='<li>${value.name}<li>'
    })
}