import React from "react";

function TodoItem(props) {
  return (
    <div className="li">
      {/* <input
        type="checkbox"
        id={props.id}
        value={props.item}
        onClick={props.onChecked}
      /> */}
      <label htmlFor={props.id}>{props.item}</label>
      <i
        className="fa fa-trash"
        id={props.id}
        value={props.item}
        onClick={props.onChecked}
      ></i>
    </div>
  );
}
export default TodoItem;
