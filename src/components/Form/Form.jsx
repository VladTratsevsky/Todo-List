import { useState } from "react";
import { Input } from "../Input/Input";

function getId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function Form({ onClick }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = () => {
    const todoshka = {
      text: text,
      checked: false,
      id: getId(),
      classNameDon: "text",
      buttonText: "Done",
      todoDon: "todo",
    };

    onClick(todoshka);
    setText("");
  };

  return (
    <div className="input-container">
      <Input
        className="input"
        value={text}
        onChange={onChangeInput}
        placeholder="What's up Dude?"
      />
      <button className="button-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
}
