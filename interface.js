"use strict";
var statusType;
(function (statusType) {
    statusType[statusType["Active"] = 0] = "Active";
    statusType[statusType["Completed"] = 1] = "Completed";
    statusType[statusType["Deleted"] = 2] = "Deleted";
})(statusType || (statusType = {}));
;
var Todo = (function () {
    function Todo(todos) {
        this.todos = todos;
    }
    Todo.prototype.add = function (list) {
        this.todos.push(list);
    };
    Todo.prototype.change = function (value, id) {
        console.log("in change");
        this.todos[id].name = value;
    };
    Todo.prototype.delete = function (id) {
        this.todos.splice(id, 1);
    };
    Todo.prototype.completetodo = function (id) {
        this.todos[id].status = statusType.Completed;
    };
    return Todo;
}());
var list_of_Todos = new Todo([]);
function addItem(value, status) {
    list_of_Todos.add({
        name: value,
        status: status
    });
}
function changeItem(value, id) {
    list_of_Todos.change(value, id);
}
function deleteItem(id) {
    list_of_Todos.delete(id);
}
function completeItem(id) {
    list_of_Todos.completetodo(id);
}
