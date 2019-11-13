import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo.js';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'something else....'},
      {id: 3, content: 'but, u know!'},
    ]
  }

  deleteTodo = (id) => {
    const newTodoList = this.state.todos.filter(_ => _.id !== id);
    this.setState({
      todos: newTodoList
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    const newTodoList = [...this.state.todos, todo];
    this.setState({
      todos: newTodoList
    })
  }

  render() {
    return (
      <div>
        <h1 className="center">__the end of the F***ing worLd.</h1>
        <div className="container">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
