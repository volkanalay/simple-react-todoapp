import React from "react";
import TodosList from "./todos-list"
import CreateTodo from "./create-todo";

const LOCAL_STORAGE_KEY = "TODOAPP"

export default class ToDoApp extends React.Component {
    constructor (props) {
        super(props);
        this.populate()
        this.state = {
            todos: this.items
        };
    }   
    populate () {
        this.items = this.getToDoItems();
    }
    getToDoItems () {
        try {
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
        } catch (e) {}
        return [];
    }
    save () {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.items));
    }
    toggle (id) {
        let todoItem = this.items[id];
        todoItem.isCompleted = !todoItem.isCompleted;
        this.save();
    }
    add (obj) {
        this.items.push(obj);
        this.save();
    }
    remove (id) {
        this.items.splice(id, 1);
        this.save();
    }
    update (id, task) {
        let todoItem = this.items[id];
        todoItem.task = task;
        this.save();
    }
    createTask (task) {
        task = task.trim();
        if (!task) { return; }
        this.add({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    toggleTask (taskId) {
        this.toggle(taskId);
        this.setState({ todos: this.state.todos });
    }
    editTask (taskId, task) {
        this.update(taskId, task);
        this.setState({ todos: this.state.todos });
    }
    deleteTask (taskId) {
        this.remove(taskId);
        this.setState({ todos: this.state.todos });
    }

    render () {
        return (
            <div>
                <CreateTodo
                    createTask={this.createTask.bind(this)}
                />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    
}
