import React, { useContext, useState } from "react";
import { Clear } from "@material-ui/icons";

import storeApi from "../../utils/storeApi";

import "./styles.scss";

 const InputCard=({ setOpen, listId, type })=> {

  const { handleAddCard, handleAddList } = useContext(storeApi);

  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleButtonAdd = () => {
    if (type === "card") {
      handleAddCard(title, listId);
    } else {
      handleAddList(title); 
    }
    setOpen(false);
    setTitle("");
  };

  return (
    <div className="input-card">
      <div className="input-card-container">
        <textarea
          onChange={handleOnChange}
          value={title}
          className="input-text"
          placeholder={
            type === "card"
              ? "Enter a title"
              : "Enter Title Name"
          }
          autoFocus
        />
      </div>
      <div className="add">
        <button className="button-add" onClick={handleButtonAdd}>
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <button
          className="button-cancel"
          onClick={() => {
            setTitle("");
            setOpen(false);
          }}
        >
          <Clear />
        </button>
      </div>
    </div>
  );
}

export default InputCard;
