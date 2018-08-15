import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodoActions } from "./store/ducks/todos";

import "./styles.css";

class TodoList extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.input.value);

    this.input.value = "";
  };

  render() {
    const { todos, toggleTodo, removeTodo } = this.props;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input ref={el => (this.input = el)} />
          <button type="submit">Novo</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.complete ? <s>{todo.text}</s> : todo.text}
              <div>
                <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
