import React, { Component } from "react";

export default class MenuFilter extends Component {
  state = {
    filterBtnValue: "Filter Todo"
  };
  filter(event) {
    this.props.filterBy(event);
    this.setState({ filterBtnValue: event });
  }
  render() {
    return (
      <div className="btn-group dropdown">
        <button
          type="button"
          className={
            this.state.filterBtnValue === "COMPLETED"
              ? "btn btn-success dropdown-toggle"
              : "btn btn-danger dropdown-toggle"
          }
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.state.filterBtnValue}
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={() => this.filter("ALL")}>
            All
          </button>
          <button
            className="dropdown-item"
            onClick={() => this.filter("COMPLETED")}
          >
            Completed
          </button>
          <button
            className="dropdown-item"
            onClick={() => this.filter("ACTIVE")}
          >
            Active
          </button>
        </div>
      </div>
    );
  }
}
