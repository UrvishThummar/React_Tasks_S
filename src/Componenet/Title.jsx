import React, { useState } from 'react';

function Title() {
  const [newTitle, setNewTitle] = useState('');

  function handleTitleChange (){
    if (newTitle.trim()) {
      document.title = newTitle;
      setNewTitle(''); 
        }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Change Document Title</h2>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Enter new title"
       
      />
      <button
        onClick={handleTitleChange}
       
      >
        Change Title
      </button>
    </div>
  );
}

export default Title;