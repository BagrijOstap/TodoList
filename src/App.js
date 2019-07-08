import React, { Component } from 'react';

import TodoItem from './components/TodoItem'
import CreateTodoItem from './components/CreateTodoItem';

import './app.css';


class App extends Component {

  constructor(props){
    super(props);

    this.removeListItemByIndex = this.removeListItemByIndex.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.changeIsDone = this.changeIsDone.bind(this);
  };

  state = {
    todoList: [
      {title: 'todo1', description: 'buyCar', isDone: false,},
      {title: 'todo2', description: 'checkCar', isDone: false,},
      {title: 'todo3', description: 'carWash', isDone: false,},
      {title: 'todo4', description: 'repairCar', isDone: false,},
    ],
  };

  changeIsDone (index, status) {
    const todoList = this.state.todoList;
    const newTodoList = [...todoList];
    newTodoList[index].isDone = status;
    this.setState({ todoList: newTodoList })
  };

  addTodoItem (name, description) {
    const todoList = this.state.todoList;
    const newTodoList = [...todoList];
    newTodoList.push({ title: name, description: description, isDone: false, })
    this.setState({ todoList: newTodoList })

  };

  removeListItemByIndex (removeIndex) {
    const todoListLink = this.state.todoList;
    const todoList = [...todoListLink];
    todoList.splice(removeIndex, 1);
    this.setState({ todoList: todoList })
  };

  render() {
    const todoList = this.state.todoList;
    const onTodoRemoveClick = this.removeListItemByIndex;
    const changeIsDone = this.changeIsDone;

    return <div className="app-container">
      {
        todoList.map((item, index) => {
          return(
            <TodoItem
              key={index}
              title={item.title}
              description={item.description}
              isDone={item.isDone}
              index={index}
              onDeleteClick={onTodoRemoveClick}
              changeIsDone={changeIsDone}
            />
          )
        })
      }
      <CreateTodoItem
        onAddTodoItem={this.addTodoItem}
      />
    </div>;

  };
}

export default App;
