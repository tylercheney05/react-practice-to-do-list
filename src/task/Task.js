const styles = {
  task: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'}
}

const Task = ({id, task, complete, buttonColor, taskClick}) => {
  return (
    <>
      <li
        style={ complete ? { ...styles.complete } : styles.task}
      >
        {task}
      </li>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick = { () => taskClick(id)}
      >
        Complete
      </button>
    </>
  )
}

export default Task;