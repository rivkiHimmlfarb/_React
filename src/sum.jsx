function DisplaySum({tasks}) {
  let sum = 0;
    for (const task of tasks) {
        if (task.status) {
            sum++;
        }
    }
    return (
        <div>
            <h2 style={{ color: "teal" }}>משימות שהושלמו: {sum} מתוך {tasks.length}</h2>
        </div>
    )
}


export default DisplaySum