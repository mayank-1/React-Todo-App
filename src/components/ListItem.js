import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <div>
        {this.props.items.length ? (
          <div>
            {this.props.items.map((item, index) => {
              return (
                <div
                  className={
                    item.isCompleted
                      ? "card m-2 border border-success shadow"
                      : "card m-2 border border-danger shadow"
                  }
                  key={index}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-7">
                        <span className="font-weight-bolder">{item.title}</span>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-4 align-self-end text-center">
                            {!item.isCompleted ? (
                              <a onClick={() => this.props.editTodo(index)}>
                                <i className="far fa-edit text-info"></i>
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="col-4 align-self-end text-center">
                            <a onClick={() => this.props.deleteTodo(index)}>
                              <i className="far fa-trash-alt text-danger"></i>
                            </a>
                          </div>
                          <div className="col-4 align-self-end text-center">
                            {!item.isCompleted ? (
                              <a onClick={() => this.props.completeTodo(index)}>
                                <i className="far fa-check-circle text-success"></i>
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <span className="text-muted">Created On:</span>{" "}
                        {item.created_on}
                      </div>
                      <div className="col-md-6 ml-auto">
                        <span className="text-muted">
                          Deadline(yyyy-mm-dd):
                        </span>{" "}
                        {item.deadline}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="card bg-light mx-auto my-auto mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header text-center">
              <i className="far fa-smile display-4"></i>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">
                {this.props.items.length} Todo's Found
              </h5>
              <p className="card-text text-muted">
                You don't have any task, Enjoy!
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
