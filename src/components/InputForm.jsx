import React from "react";

function InputForm(props) {
  return (
    <div className="form">
      <form onSubmit={props.onClick}>
        <input
          onChange={props.onChange}
          value={props.text}
          type="text"
          required
        />
        <button>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputForm;
