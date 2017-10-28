let buttons = {
    createeditbutton: function () {
        let editbutton = document.createElement('button');
        editbutton.textContent = 'Edit';
        editbutton.setAttribute("onclick", "edittodo(" + buttonid + ")");
        editbutton.setAttribute("class", "breathHorizontal");
        return editbutton;
    },

    createdeletebutton: function () {
        let deletebutton = document.createElement('button');
        deletebutton.textContent = 'Delete';
        deletebutton.setAttribute("onclick", "deletetodo(" + buttonid + ")");
        deletebutton.setAttribute("class", "breathHorizontal");
        return deletebutton;
    },
};

window.onload = function () {
    let input = document.getElementById('addtodoinput_id');
    let add_btn = document.getElementById('add_button');

    add_btn.onclick = function () {
        console.log("in add");
        let values = input.value;
        addItem(values);
        DisplayList();
        input.value = "";
    };

};

function edittodo(id) {
    console.log("in edit");
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
    console.log("in complete");
    if (checkbox.checked === true) {
        todoli.setAttribute("class", "todoStatusCompleted");
    } else {
        todoli.setAttribute("class", "todostatusUncompleted");
    }
}

function DisplayList() {
    console.log("in display list");
    let new_todo = document.querySelector('ul');
    new_todo.innerHTML = "";
     if (new_todo) {
        for (let i = 0; i < list_of_Todos.todos.length; i++) {
            buttonid = i;
            createElement(buttonid);
            new_todo.appendChild(todoli);
        }
    }
}

function  createElement(i) {
    todoli = document.createElement('div');
    todoli.setAttribute("class", "breathVertical") ;

    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "checkbox_");
    checkbox.setAttribute("onclick", " completetodo(i) ");
    todoli.appendChild(checkbox);

    todoli.appendChild(document.createTextNode(list_of_Todos.todos[i]));
    todoli.appendChild(buttons.createeditbutton());
    todoli.appendChild(buttons.createdeletebutton());

}

