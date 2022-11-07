class todoservice {
    todo_data = {
        "todo": [{
            "title": "T1",
            "description": "D1",
            "done": false
        }, {
            "title": "T1",
            "description": "D1",
            "done": false
        }, {
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor() {
        this.todos = this.todo_data;
    }

    get_todos() {
        return this.todos;
    }

    add_todo(todo) {
        // Your code here
        // this.todo_data.push(todo);
        // console.log(todo_data);
        this.todo_data["todo"].push(todo)
        this.todos = this.todo_data

    }

    delete_todo(id) {
        // Your code here
        // this.todo_data = this.todo_data.filter(item => item.id != id)
        // console.log(todo_data);
        this.todos.splice(this.todos.indexOf(id))
        this.todos = this.todo_data
    }

    update_todo(id, todo) {
        // Your code here
        this.todos.map(p => p.id === id ? p.todo = todo : p)
    }
}


module.exports = todoservice;