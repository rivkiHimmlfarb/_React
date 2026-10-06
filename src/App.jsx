import { useState } from 'react'
import DisplayTasks from './DisplayTasks.jsx'
import DisplaySum from './sum.jsx'
import HeaderDisplay from './headers.jsx'
import './App.css'

function App() {
  const [doneTasks, setDoneTasks] = useState([])

  function handleTaskDone(taskName) {
    setDoneTasks((prev) => [...prev, taskName])
  }
  const tasks=[
      {
        task:"הכנת אוכל",
        status: true,
        id:1
    }
     , {
task:"הכנת עוגה",
status: true,
id:2
}
,{
  task:"ניקוי הבית",
  status: false,
  id:3
},
{
  task:"כביסות",
  status: false,
  id:4
},{
    task:"שטיפת כלים",
    status: false,
    id:5}]

 const user ="רבקי"  

  return (
    <>
      <HeaderDisplay user={user} />
      <DisplayTasks tasks={tasks} onTaskDone={handleTaskDone} />
      <DisplaySum tasks={tasks} />
    </>
  )
}
export default App
