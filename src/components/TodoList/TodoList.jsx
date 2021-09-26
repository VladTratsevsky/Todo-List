import { render } from "@testing-library/react";
import React from "react";
import { Form } from "../Form/Form";
import { ListItem } from "../ListItem/ListItem";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  onClickDelete = (id) => {
    const filteredTodos = this.state.todos.filter((item) => item.id !== id);

    this.setState({ todos: filteredTodos });
  };

  onClickDon = (id) => {
    this.state.todos.map(function (item) {
      if (item.id === id) {
        if (item.classNameDon === "done") {
          item.classNameDon = "text";
        } else {
          item.classNameDon = "done";
        }

        if (item.buttonText === "UnDone") {
          item.buttonText = "Done";
        } else {
          item.buttonText = "UnDone";
        }

        if (item.todoDon === "todoDon") {
          item.todoDon = "todo";
        } else {
          item.todoDon = "todoDon";
        }
      }
    });

    this.setState(this.state.todos);
  };

  onClickDbl = (id) => {
    this.state.todos.map(function (item) {
      if (item.id === id) {
        if (item.todoDon === "highlight") {
          if ((item.buttonText = "Done")) {
            item.todoDon = "todo";
          } else {
            item.todoDon = "todoDon";
          }
        } else {
          item.todoDon = "highlight";
        }
      }
    });
    this.setState(this.state.todos);
  };

  onClickAdd = (todoshka) => {
    const newTodos = [...this.state.todos, todoshka];

    this.setState({ todos: newTodos });
  };

  onClickRemove = () => {
    const filteredSelectedTodos = this.state.todos.filter(
      (item) => item.todoDon !== "highlight"
    );

    this.setState({ todos: filteredSelectedTodos });
  };

  onClickDone = () => {
    this.state.todos.map(function (item) {
      if (item.todoDon === "highlight") {
        item.buttonText = "UnDone";
        item.classNameDon = "done";
        item.todoDon = "todoDon";
      }
    });
    this.setState(this.state.todos);
  };

  render() {
    return (
      <div className="container">
        <div className="todo-list">
          <h1 className="title">TODO LIST</h1>
          <Form onClick={this.onClickAdd} />
          {this.state.todos.map((item) => {
            return (
              <ListItem
                key={item.id}
                text={item.text}
                id={item.id}
                classNameDon={item.classNameDon}
                buttonText={item.buttonText}
                todoDon={item.todoDon}
                onClickDelete={this.onClickDelete}
                onClickDon={this.onClickDon}
                onClickDbl={this.onClickDbl}
              />
            );
          })}
        </div>
        <button
          className="remove-selected"
          onClick={() => this.onClickRemove()}
        >
          remove selected
        </button>
        <button className="done-selected" onClick={() => this.onClickDone()}>
          done selected
        </button>
      </div>
    );
  }
}
