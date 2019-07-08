import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTodoItem extends Component {
  static propTypes = {
    onAddTodoItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onCreateTodoClick = this.onCreateTodoClick.bind(this);
  };

  onCreateTodoClick(){
    const name = this.state.name;
    const description = this.state.description;
    if(name === '') {
      alert('заповніть поле вводу name');
    } else if(description === '') {
      alert('заповніть поле вводу description');
    } else {
      this.props.onAddTodoItem(name, description);
    };
  };

  onDescriptionChange(event){
    this.setState({ description: event.target.value });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  };

  render() {
    const onAddTodoItem = this.props.onAddTodoItem;
    const onNameChange = this.onNameChange;
    const onDescriptionChange = this.onDescriptionChange;


    return <div className="add-todoitem">
      <label htmlFor="nameInput">Name</label>
      <input type="text" id="nameInput" onChange={onNameChange} />
      <label htmlFor="nameArea">Description</label>
      <textarea id="nameArea" onChange={onDescriptionChange} />
      <button onClick={this.onCreateTodoClick}>create</button>
    </div>;
  };
}

export default CreateTodoItem;


