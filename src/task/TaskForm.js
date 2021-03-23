import React from 'react';

class TaskForm extends React.Component {
  state = { task: '' }

  handleChange = (e) => {
    this.setState({ task: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.task);
    this.setState({ task: ''})
  }

  render () {
    const { task } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={task}
          name="task"
          onChange={this.handleChange}
          required
          placerholder="Add an Item"
          type="text"
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default TaskForm;