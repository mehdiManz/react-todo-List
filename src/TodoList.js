// TodoList.js
import React from "react";

function TodoList({ items, handleItemClick }) {
  return (
    <div>
      <ul>
        {items.map((todoItem, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            style={{ textDecoration: todoItem.deleted ? "line-through" : "none" }}
          >
            {todoItem.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
