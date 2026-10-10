import { useState } from 'react';

function AddTask({ onAddTask }) {
  // State לשמירת הטקסט של המשימה החדשה
  const [taskText, setTaskText] = useState('');
  
  // State לשליטה האם הטופס פתוח או סגור (בדומה לכפתור שם המשתמש)
  const [isOpen, setIsOpen] = useState(false);

  // פונקציה לטיפול בשליחת הטופס
  function handleSubmit(e) {
    e.preventDefault();
    if (taskText.trim() !== '') {
      onAddTask(taskText.trim()); // הוספת המשימה לרשימה
      setTaskText('');            // איפוס שדה הקלט
      setIsOpen(false);           // סגירת הטופס וחזרה לכפתור
    }
  }

  return (
    <div className="input-wrapper">
      {!isOpen ? (
        // כפתור פתיחת טופס הוספת משימה
        <button className="main-btn" onClick={() => setIsOpen(true)}>
          + הוסף משימה חדשה
        </button>
      ) : (
        // טופס הקלדת המשימה שיופיע רק בלחיצה ויישאר מוסתר לאחריה
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="הכנס משימה חדשה..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            autoFocus
          />
          <button className="submit-btn" type="submit">
            אישור
          </button>
          <button className="cancel-btn" type="button" onClick={() => setIsOpen(false)}>
            ביטול
          </button>
        </form>
      )}
    </div>
  );
}

export default AddTask;