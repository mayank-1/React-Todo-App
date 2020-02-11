import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    title: "",
    deadline: "",
    created_on: new Date().toDateString(),
    isCompleted: false,
    isEdit: false
  };

  updateTodoTitle(title) {
    this.setState({ title });
  }

  updateTodoDeadline(deadline) {
    this.setState({ deadline });
  }

  submitNewTodo() {
    this.props.getNewTodo(this.state);
    this.setState({
      title: "",
      deadline: "",
      created_on: new Date().toDateString(),
      isCompleted: false,
      isEdit: false
    });
  }

  submitUpdatedTodo() {
    let updatedTodo = {
      title: this.state.title,
      deadline: this.state.deadline,
      created_on: this.state.created_on,
      isCompleted: this.state.isCompleted,
      isEdit: false
    };
    this.props.getUpdatedTodo(updatedTodo);
    this.setState({
      title: "",
      deadline: "",
      created_on: new Date().toDateString(),
      isCompleted: false,
      isEdit: false
    });
  }

  componentDidUpdate = (prevProp, prevState) => {
    if (this.props.dataToEdit !== prevProp.dataToEdit) {
      this.setState(this.props.dataToEdit);
    }
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (this.state.isEdit) {
              this.submitUpdatedTodo();
            } else {
              this.submitNewTodo();
            }
          }}
        >
          <div className="form-group">
            <input
              type="text"
              value={this.state.title}
              className="form-control"
              placeholder="Title"
              onChange={e => this.updateTodoTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={this.state.deadline}
              className="form-control"
              onChange={e => this.updateTodoDeadline(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value={this.state.isEdit ? "UPDATE" : "ADD"}
          />
        </form>
      </div>
    );
  }
}
