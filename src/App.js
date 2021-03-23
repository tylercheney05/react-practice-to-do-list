import React, {Component} from 'react';
// import './App.css';
import TaskList from './task/TaskList'
import TaskForm from './task/TaskForm'
import Footer from './Footer'

class App extends Component {
  state = { tasks: [
    {id: 1, task: 'Pickup groceries', complete: false},
    {id: 2, task: 'Finish homework', complete: true},
    {id: 3, task: 'Do dishes', complete: false}
  ],
  filter: 'All'
}

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

  addItem = (task) => {
    const { tasks } = this.state;
    const item = { task, id: this.getUniqId(), complete: false };
    this.setState({ tasks: [item, ...tasks] });
  }

  handleClick = (id) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.map( task => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete
          }
        }
        return task
      })
    })
  }

  visibleItems = () => {
    const { tasks, filter } = this.state;
    switch(filter) {
      case 'Active':
        return tasks.filter( t => !t.complete )
      case 'Complete':
        return tasks.filter( t => t.complete )
      default:
        return tasks;
    }
  }
  
  render () {
    const { tasks, filter } = this.state

    return (
      <>
        <h1>Task List</h1>
        <TaskForm addItem={this.addItem}/>
        <TaskList tasks={this.visibleItems()}
         buttonColor="red"
         taskClick={this.handleClick}
         />
        <Footer 
          filter={filter}
          setFilter={this.setFilter}
        />
      </>
    )
  }
}

export default App;
