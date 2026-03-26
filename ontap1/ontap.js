//let todos=[
//    {id:1, todoName:"Đi học", deadLine: "25/3", status:"To do"},
//   {id:2, todoName:"Đi Chơi", deadLine: "25/3", status:"Pending"},
//   {id:3, todoName:"Làm bài tập", deadLine: "25/3", status:"Done"},

//]
//localStorage.setItem("todo", JSON.stringify (todos));

let todos = JSON.parse(localStorage.getItem("todo")) || [];
// chức năng hiển thị dữ liệu ra giao diện
function renderTodo(){
    let todoListElement = document.getElementById("todoList");
    todos.forEach(todo => {
        todoListElement.innerHTML += `<tr>
        <td>${todo.id}</td>
        <td>${todo.todoName}</td>
        <td>${todo.deadLine}</td>
        <td>${todo.status}</td>
        <tr>`
    })
}