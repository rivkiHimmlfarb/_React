function DisplayTasks({ onTaskDone, tasks = [], onToggleTask }) {
  function handleClick(taskName) {
    onTaskDone(taskName);
  }

  return (
    <div>
      {/* מעבר על מערך המשימות ויצירת אלמנט חזותי לכל משימה */}
      {tasks.map((task) => (
        <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '5px 0' }}>
          <h3>{task.task}</h3>
          <button 
            onClick={() => onToggleTask(task.id)} // קריאה לפונקציה לעדכון מצב המשימה לפי מזהה
            style={{ cursor: 'pointer', background: 'transparent', border: '1px solid #ccc', padding: '5px 10px', borderRadius: '5px' }}
          >
            מצב: {task.status ? '✅' : '⬜'}
          </button>         
        </div>
      ))}
      <br />
    </div>
  );
}

export default DisplayTasks;