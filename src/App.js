import React, { Component } from 'react';

import TodoItem from './components/TodoItem'

class App extends Component {

  constructor(props){
    super(props);

    this.removeListItemByIndex = this.removeListItemByIndex.bind(this);
  };

  state = {
    todoList: [
      {title: 'todo1', description: 'buyCar', isDone: false,},
      {title: 'todo2', description: 'checkCar', isDone: false,},
      {title: 'todo3', description: 'carWash', isDone: false,},
      {title: 'todo4', description: 'repairCar', isDone: false,},
    ],
  };

  removeListItemByIndex (removeIndex) {
    const todoListLink = this.state.todoList;
    const todoList = [...todoListLink];
    todoList.splice(removeIndex, 1);
    this.setState({ todoList: todoList })
  }

  render() {
    const todoList = this.state.todoList;


    return <div>
      <h3>vecfsvvr</h3>
      {
        todoList.map((item) => {
          return(
            <TodoItem
              title={item.title}
              description={item.description}
              isDone={item.isDone}
            />
          )
        })

      }
    </div>;

  };

}

export default App;
