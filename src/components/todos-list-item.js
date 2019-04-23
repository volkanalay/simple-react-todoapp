import React from "react";

export default class TodosListItem extends React.Component {
    constructor (props) {
        super(props);
    }

    toggleTask () {
        this.props.toggleTask(this.props.id);
    }

    deleteTask () {
        this.props.deleteTask(this.props.id);
    }
    
    render () {
        const { isCompleted } = this.props;
        return (
            <tr className={"todo-" + (isCompleted ? "completed" : "not-completed") }>
                <td onClick={this.toggleTask.bind(this)} style={{cursor:"pointer"}}>{this.props.task}</td>
                <td>
                    <button className="delete-btn" onClick={this.deleteTask.bind(this)}>Sil</button>
                </td>
            </tr>
        )
    }

    
}
