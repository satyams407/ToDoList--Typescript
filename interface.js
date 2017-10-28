"use strict";
var Todo = (function () {
    function Todo(todos) {
        this.todos = todos;
    }
    Todo.prototype.add = function (list) {
        this.todos.push(list.name);
    };
    Todo.prototype.change = function (value, id) {
        console.log("in change");
        this.todos[id] = value;
    };
    Todo.prototype.delete = function (id) {
        this.todos.splice(id, 1);
    };
    return Todo;
}());
var list_of_Todos = new Todo([]);
function addItem(value) {
    list_of_Todos.add({
        name: value
    });
}
function changeItem(value, id) {
    list_of_Todos.change(value, id);
}
function deleteItem(id) {
    list_of_Todos.delete(id);
}
function completeItem(value) {
    list_of_Todos.add({
        name: value
    });
}
