// App.js
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./index.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, { text: inputText, deleted: false }];
    });
    setInputText("");
  }

  function handleItemClick(index) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = { ...prevItems[index], deleted: true };

      setTimeout(() => {
        const filteredItems = updatedItems.filter((item) => !item.deleted);
        setItems(filteredItems);
      }, 500);

      return updatedItems;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <TodoForm inputText={inputText} handleChange={handleChange} addItem={addItem} />
      <TodoList items={items} handleItemClick={handleItemClick} />
    </div>
  );
}

export default App;
