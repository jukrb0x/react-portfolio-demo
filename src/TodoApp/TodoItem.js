import { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li className="todo-item">
        <input
          key={this.props.todo.id}
          type="checkbox"
          checked={this.props.todo.completed}
          // onChange={() => props.onToggle(this.props.todo.id)} // FIXME
          // onChange={() => console.log(this.props.todo)}
          onChange={() => this.props.onToggle(this.props.todo.id)}
        />
        <label className={this.props.todo.completed ? 'complete' : ''}>
          {this.props.todo.title}
        </label>
        <button onClick={() => this.props.todo.onRemove(this.props.todo.id)}>x</button>
      </li>
    );
  }
}
