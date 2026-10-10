import { useState } from 'react';
import DisplayTasks from './DisplayTasks.jsx';
import DisplaySum from './sum.jsx';
import HeaderDisplay from './headers.jsx';
import Input from './input.jsx';
import AddTask from './AddTask.jsx'; // ייבוא רכיב הוספת המשימה החדש
import './App.css';

function App() {
  // הגדרת user כ-State כדי שעדכון שלו ירנדר מחדש את HeaderDisplay
  const [user, setUser] = useState('');

  // הגדרת רשימת המשימות הראשונית ב-State
  const [tasks, setTasks] = useState([
    { task: "הכנת אוכל", status: true, id: 1 },
    { task: "הכנת עוגה", status: true, id: 2 },
    { task: "ניקוי הבית", status: false, id: 3 },
    { task: "כביסות", status: false, id: 4 },
    { task: "שטיפת כלים", status: false, id: 5 }
  ]);

  // פונקציה לעדכון סטטוס ביצוע של משימה קיימת לפי מזהה
  function onToggleTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  }

  // פונקציה להוספת משימה חדשה למערך המשימות הקיים
  function handleAddTask(newTaskText) {
    const newTask = {
      task: newTaskText,
      status: false, // משימה חדשה מתחילה כלא בוצעה
      id: Date.now() // יצור מזהה ייחודי מבוסס זמן
    };
    // הוספת המשימה החדשה לסוף המערך הקיים ב-State
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // פונקציה לעדכון שם המשתמש
  function handleAddName(name) {
    setUser(name); 
  }

  return (
    <>
      <HeaderDisplay user={user} />
      
      {/* הוספת רכיב הוספת המשימה והעברת פונקציית העדכון כ-Prop */}
      <AddTask onAddTask={handleAddTask} />
      
      <DisplayTasks tasks={tasks} onToggleTask={onToggleTask} />
      <DisplaySum tasks={tasks} />
      <Input onAddName={handleAddName} currentUser={user} />   
    </>
  );
}

export default App;