class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todo_data["todo"].push(todo);
        this.todos = this.todo_data;
    }
    

        delete_todo(id) {
            return this.todo_data["todo"].filter(p => p.title != id);
        }
    

        update_todo(id, todo) {
            // Your code here
            return this.todo_data["todo"].map(p => p.title === id ? p.description = todo : p)
        }
}


module.exports= todoservice;