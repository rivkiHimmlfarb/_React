import { useState } from 'react';

function Input({ onAddName, currentUser }) {
  // הגדרת State לשמירת הטקסט שהמשתמש מקליד בשדה הקלט
  const [userName, setUserName] = useState('');
  
  // הגדרת State לשליטה האם הטופס פתוח להקלדה או מוצג ככפתור בלבד
  const [isOpen, setIsOpen] = useState(false);

  // פונקציה המופעלת בעת שליחת הטופס
  function handleSubmit(e) {
    e.preventDefault(); // מניעת רענון ברירת המחדל של הדפדפן
    // בדיקה שהמחרוזת אינה ריקה (לא מכילה רק רווחים)
    if (userName.trim() !== '') {
      onAddName(userName.trim()); // העברת השם שנבחר לרכיב האב (App)
      setUserName('');            // איפוס שדה הקלט
      setIsOpen(false);           // סגירת טופס הקלט וחזרה לכפתור הרגיל
    }
  }

  return (
    <div className="input-wrapper">
      {/* תנאי: אם הטופס סגור, הצג כפתור פתיחה. אם פתוח - הצג את הטופס */}
      {!isOpen ? (
        <button className="main-btn" onClick={() => setIsOpen(true)}>
          {currentUser ? 'החלף משתמש' : 'הכנס שם משתמש'}
        </button>
      ) : (
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="הכנס שם משתמש..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)} // עדכון ה-State בעת הקלדה
            autoFocus // מיקוד אוטומטי בשדה בעת פתיחתו
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

export default Input;