import { useState } from "react";

export default function ListPage() {
  const [listItems, setListItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");

  const addItem = () => {
    setListItems([...listItems, newItemText]);
    setNewItemText("");
  };

  const removeItem = (index) => {
    const newListItems = [...listItems];
    newListItems.splice(index, 1);
    setListItems(newListItems);
  };

  return (
    <div>
      <h1>List</h1>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItemText}
        onChange={(event) => setNewItemText(event.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
