interface todoslist {
    name: string
}

class Todo {
    public todos: string[];

    constructor(todos: string[]) {
        this.todos = todos;
    }

    add(list: todoslist) {
        this.todos.push(list.name);
    }


    change(value: string, id: number) {
        console.log("in change");
        this.todos[id] = value;
    }

    delete(id: number) {
        this.todos.splice(id, 1);
    }
}

let list_of_Todos = new Todo([]);

function addItem(value: string) {
    list_of_Todos.add(
        {
            name: value
        }
    )
}

function changeItem(value: string, id: number) {
    list_of_Todos.change(value, id);
}

function deleteItem(id: number) {
    list_of_Todos.delete(id);
}

function completeItem(value: string) {
    list_of_Todos.add(
        {
            name: value
        }
    )
}

