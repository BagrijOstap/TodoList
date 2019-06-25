import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>description: {props.description}</p>
      <p>isDone: {props.isDone.toString()}</p>
      <hr/>
    </div>
  )
};


TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  isDone: PropTypes.bool,
};
TodoItem.defaultProps = {
  isDone: false,
};


export default TodoItem;
