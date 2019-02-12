var todos = ["Buy New Turtle"];

var input = prompt("What Would You Like To Do?");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        listtodos();
    } else if (input === "new") {
        addtodo()
    } else if (input === "delete") {
        deletetodo();
    }
    //ask again for new input
    var input = prompt("What Would You Like To Do?");

}
console.log("OK, YOU QUIT THE APP")

function listtodos() {
    console.log("==========")
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("==========")
}

function addtodo() {
    //ask for new Todo
    var newTodo = prompt("Enter New Todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added todo")
}

function deletetodo() {
    //ask the index of todo to be deleted
    var index = prompt("Enter The Index Of Todo to Delete");
    //delete that todo
    //splice
    todos.splice(index, 1);
    console.log("Deleted todo")
}

