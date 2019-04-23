import React from "react";

export default class CreateTodo extends React.Component {
    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="create-todo-form">
                <input type="text" placeholder="Görev" ref="taskMessage" autoFocus/>
                <button>Ekle</button>
            </form>
        );
    }
    onSubmit (e) {
        this.props.createTask(this.refs.taskMessage.value);
        this.refs.taskMessage.value = "";
        e.preventDefault();
    }
}
