import React, { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // makes sure the data typed in the form remains even when refreshed
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
    // makes sure the text box becomes empty after adding a todo item
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          // default empty string, but when input is changed(something is written), then it takes the value of the input given in the label and places it in newItem
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
