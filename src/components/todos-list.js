import React from "react";
import TodosListHeader from "./todos-list-header";
import TodosListItem from "./todos-list-item";

export default class TodosList extends React.Component {
    renderItems () {
        return this.props.todos.map((item, index) => {
            return (
                <TodosListItem
                    key={index}
                    {...item}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            )
        });
    }
    render () {
        if (!this.props.todos.length) {
            return <p className="tutorial">Ilk görevini oluştur! :)</p>;
        }
        return (
            <table>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}
