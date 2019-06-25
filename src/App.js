import React, { Component } from 'react';

import TodoItem from './components/TodoItem'

class App extends Component {

  state = {
    todoList: [
      {title: 'todo1', description: 'buyCar', isDone: false,},
      {title: 'todo2', description: 'checkCar', isDone: false,},
      {title: 'todo3', description: 'carWash', isDone: false,},
      {title: 'todo4', description: 'repairCar', isDone: false,},
    ],
  };

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
