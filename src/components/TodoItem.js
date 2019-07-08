import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './todoItem.css';

const TodoItem = (props) => {
  const onDeleteClick = props.onDeleteClick;
  const index = props.index;
  const changeIsDone = props.changeIsDone;

  const onChangeIsDoneClick = (event) => {
    const isUpdatedTaskDone = event.target.checked;
    changeIsDone(index, isUpdatedTaskDone);

  };



  return (
    <div className="todo-item">
      <h3>{props.title}</h3>
      <p>description: {props.description}</p>
      <p>isDone: {props.isDone.toString()}</p>
      <button onClick={() => { onDeleteClick(index) }}>DELETE</button>
      <input type="checkbox" checked={props.isDone} onChange={onChangeIsDoneClick} />
    </div>
  )
};


TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  changeIsDone: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  isDone: false,
};


export default TodoItem;
