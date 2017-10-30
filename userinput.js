window.onload = function () {
    let input = document.getElementById('addtodoinput_id');
    let add_btn = document.getElementById('add_button');

    add_btn.onclick = function () {
        console.log("in add");
        let values = input.value;
        addItem(values, statusType.Active);
        DisplayList();
        input.value = " ";
    };
};

function edittodo(id) {
    let newToDoItem = prompt("enter the new value of todo");
    changeItem(newToDoItem, id);
    DisplayList();
}

function deletetodo(id) {
    console.log("in delete");
    deleteItem(id);
    DisplayList();
}

function completetodo(id) {
    if (completebutton.innerText === "complete")
        list_of_Todos.todos[id].status = statusType.Completed;
    else
        list_of_Todos.todos[id].status = statusType.Active;
    console.log(completebutton.innerText);
    DisplayList();
}

function DisplayList() {
    let new_todo = document.querySelector('ul');
    new_todo.innerHTML = "";
    if (new_todo) {
        for (i = 0; i < list_of_Todos.todos.length; i++) {
            todoli = document.createElement('div');
            let editbutton = document.createElement('button');
            editbutton.textContent = 'Edit';
            editbutton.setAttribute("onclick", "edittodo(" + i + ")");
            editbutton.setAttribute("class", "breathHorizontal");

            let deletebutton = document.createElement('button');
            deletebutton.textContent = 'Delete';
            deletebutton.setAttribute("onclick", "deletetodo(" + i + ")");
            deletebutton.setAttribute("class", "breathHorizontal");

            completebutton = document.createElement('button');
            completebutton.setAttribute("class", "breathHorizontal");


            if (list_of_Todos.todos[i].status === statusType.Completed) {
                todoli.setAttribute("class", " todos todoStatusCompleted ");
                completebutton.innerHTML = "uncomplete";
                completebutton.setAttribute("onclick", "completetodo(" + i + ")");
            }
            else {
                todoli.setAttribute("class", " todos todostatusUncompleted");
                completebutton.innerHTML = "complete";
                completebutton.setAttribute("onclick", "completetodo(" + i + ")");
            }

            todoli.appendChild(document.createTextNode(list_of_Todos.todos[i].name));
            todoli.appendChild(editbutton);
            todoli.appendChild(deletebutton);
            todoli.appendChild(completebutton);
            new_todo.appendChild(todoli);
        }
    }
}

