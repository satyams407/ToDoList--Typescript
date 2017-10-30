enum statusType {Active, Completed, Deleted};

interface todoslist {
    name: string,
    status: statusType
}

class Todo {
    public todos: todoslist[];

    constructor(todos: todoslist[]) {
        this.todos = todos;
    }

    add(list: todoslist) {
        this.todos.push(list);
    }


    change(value: string, id: number) {
        console.log("in change");
        this.todos[id].name = value;
    }

    delete(id: number) {
        this.todos.splice(id, 1);
    }

    completetodo(id:number){
        this.todos[id].status=statusType.Completed;
    }
}

let list_of_Todos = new Todo([]);

function addItem(value: string, status: statusType) {
    list_of_Todos.add(
        {
            name: value,
            status: status
        }
    )
}

function changeItem(value: string, id: number) {
    list_of_Todos.change(value, id);
}

function deleteItem(id: number) {
    list_of_Todos.delete(id);
}

function completeItem(id: number) {
    list_of_Todos.completetodo(id);
}

