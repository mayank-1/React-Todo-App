import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import MenuFilter from "./components/MenuFilter";

class App extends Component {
  state = {
    todoItems: [],
    completedTodoItems: [],
    filterBtnValue: "Filter Todo",
    editTodoData: "",
    todoIdToUpdate: "",
    currentFilter: "ALL"
  };

  editTodo(id) {
    let dataToEdit = {
      title: this.state.todoItems[id].title,
      deadline: this.state.todoItems[id].deadline,
      created_on: this.state.todoItems[id].created_on,
      isCompleted: false,
      isEdit: true
    };

    this.setState({
      editTodoData: dataToEdit,
      todoIdToUpdate: id
    });
  }

  deleteTodo(id) {
    let todoCopy = this.state.todoItems.slice();
    let completedTodoItemsCopy = this.state.completedTodoItems.slice();
    let objectToDelete = todoCopy[id];
    //Now we have to check if the todo isCompleted or not
    if (todoCopy[id].isCompleted) {
      //first remove the object from completedTodos
      completedTodoItemsCopy.map((item, index) => {
        if (item === objectToDelete) {
          completedTodoItemsCopy.splice(index, 1);
        }
      });
      todoCopy.splice(id, 1);
      this.setState({
        todoItems: todoCopy,
        completedTodoItems: completedTodoItemsCopy
      });
    } else {
      todoCopy.splice(id, 1);
      this.setState({
        todoItems: todoCopy
      });
    }
  }

  completeTodo(id) {
    let todoCopy = this.state.todoItems.slice();
    if (!todoCopy[id].isCompleted) {
      todoCopy[id].isCompleted = true;
    }
    this.setState({
      todoItems: todoCopy,
      completedTodoItems: [...this.state.completedTodoItems, todoCopy[id]]
    });
  }

  updateTodo(todo) {
    if (this.state.todoItems[this.state.todoIdToUpdate] !== todo) {
      let todoItems = this.state.todoItems.slice();
      todoItems[this.state.todoIdToUpdate] = todo;
      this.setState({
        todoItems: todoItems
      });
    }
  }

  filter(id) {
    this.setState({
      currentFilter: id
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 col-xs-10 text-center todo-form">
            <h3>
              <i className="fas fa-clipboard-check"></i> Create Todo
            </h3>
            <TodoForm
              getNewTodo={data =>
                this.setState({
                  todoItems: [...this.state.todoItems, data]
                })
              }
              dataToEdit={this.state.editTodoData}
              getUpdatedTodo={todo => this.updateTodo(todo)}
            />
          </div>
          <div className="col-md-7 col-xs-10 mx-auto todo-list">
            <div className="row">
              <div className="col-md-10 mx-auto mt-1 d-flex justify-content-end">
                <MenuFilter filterBy={filter => this.filter(filter)} />
              </div>
            </div>
            <div className="row mt-3">
              <TodoList
                todoData={
                  this.state.currentFilter === "ALL"
                    ? this.state.todoItems
                    : this.state.currentFilter === "COMPLETED"
                    ? this.state.completedTodoItems
                    : this.state.currentFilter === "ACTIVE"
                    ? this.state.todoItems.filter(item => !item.isCompleted)
                    : ""
                }
                todoToEdit={idToEdit => this.editTodo(idToEdit)}
                todoToDelete={idToDelete => this.deleteTodo(idToDelete)}
                todoToComplete={idToComplete => this.completeTodo(idToComplete)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
