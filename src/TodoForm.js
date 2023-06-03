// TodoForm.js
import React, { useState } from "react";

function TodoForm({ inputText, handleChange, addItem }) {
  const [showPlaceholderMessage, setShowPlaceholderMessage] = useState(false);

  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      addItem();
    } else {
      setShowPlaceholderMessage(true);
    }
  };

  const handleInputChange = (event) => {
    handleChange(event);
    setShowPlaceholderMessage(false);
  };

  const placeholderMessage = showPlaceholderMessage ? "Empty Item? 👀" : "Enter item";

  return (
    <div className="form">
      <input
        onChange={handleInputChange}
        type="text"
        value={inputText}
        placeholder={placeholderMessage}
      />
      <button onClick={handleAddItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default TodoForm;
