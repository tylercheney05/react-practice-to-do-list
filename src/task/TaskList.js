import Task from './Task';
import React from 'react';

const TaskList = ({ tasks, buttonColor, taskClick }) => {
  return(
    <>
      <h3>Tasks</h3>
      {
        <ul>
          { tasks.map( t => (
            <Task key={t.id}
              {...t}
              tasks={tasks}
              taskClick={taskClick}
              buttonColor={buttonColor}
            />
          ))}
        </ul>
        }
    </>
  )
}

export default TaskList