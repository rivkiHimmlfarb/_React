function DisplayTasks({ onTaskDone, tasks = [] }) {
  function handleClick(taskName) {
    onTaskDone(taskName)
  }




  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.task}</h3>
          <p>Status: {task.status ? '✅' : '⬜'}</p>
        </div>
      ))}
      <br />
    </div>
  )
}

export default DisplayTasks
