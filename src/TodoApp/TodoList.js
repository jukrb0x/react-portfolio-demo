import { Component } from 'react';
import TodoItem from './TodoItem';
import TodoData from './TodoData';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(id) {
    const todos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todos });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem onToggle={this.onToggle} key={item.id} todo={item} />
    ));
    return <div className="todo-wrapper">{todoItems}</div>;
  }
}
