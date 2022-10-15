import React, { useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import TodoItem from "./TodoItem";
function App() {
  // input useState
  const [inputText, setInputText] = useState("");

  // todo Items useState
  const [items, setItem] = useState([]);

  // handle input change
  function handleChange(event) {
    event.persist();
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // add item to todolist
  function addItem(e) {
    e.preventDefault();
    setItem((prevItems) => {
      return [...prevItems, inputText];
    });
    console.log(inputText + " Added");
    setInputText("");
  }

  //delete item from todo list
  function deleteItem(e) {
    e.persist();
    const checkedItem = e.target.id;

    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== Number(checkedItem);
      });
    });
  }
  return (
    <div className="container">
      <Header />
      <InputForm text={inputText} onChange={handleChange} onClick={addItem} />
      {items.map((item, index) => {
        return (
          <TodoItem
            key={index}
            id={index}
            item={item}
            onChecked={deleteItem}
            required
          />
        );
      })}
    </div>
  );
}

export default App;
