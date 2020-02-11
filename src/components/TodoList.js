import React, { Component } from "react";
import ListItem from "./ListItem";

export default class TodoList extends Component {
  render() {
    return (
      <div className="col-md-12 mx-auto">
        <ListItem
          items={this.props.todoData}
          editTodo={idToEdit => this.props.todoToEdit(idToEdit)}
          deleteTodo={idToDelete => this.props.todoToDelete(idToDelete)}
          completeTodo={idToComplete => this.props.todoToComplete(idToComplete)}
        />
      </div>
    );
  }
}
