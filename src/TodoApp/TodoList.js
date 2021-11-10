import { Component } from 'react';
import TodoItem from './TodoItem';
import TodoData from './TodoData';

export default class TodoList extends Component {
  render() {
    const todoItems = TodoData.map((item) => <TodoItem key={item.id} todo={item} />);
    return <div className="todo-wrapper">{todoItems}</div>;
  }
}
