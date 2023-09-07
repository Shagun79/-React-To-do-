import React, { useState } from "react";
import todo from "./todo.css";
import ListItem from "./list";
let Todo = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setitems] = useState([]);

  let itemEvents = (e) => {
    console.log(e.target.value);
    setInputList(e.target.value);
  };
  let addItem = () => {
    setInputList("");

    setitems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  const deleteItem = (id) => {
    console.log("delete", id);
    setitems((arrayValue) => {
      return arrayValue.filter((cElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="content">
        <h1>To Do List</h1>
        <input
          type="text"
          placeholder="Add a Item"
          onChange={itemEvents}
          value={inputList}
        />{" "}
        <button onClick={addItem}>+</button>
        <ul>
          {Items.map((itemval, index) => {
            return (
              <ListItem
                text={itemval}
                key={index}
                id={index}
                delete={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Todo;
