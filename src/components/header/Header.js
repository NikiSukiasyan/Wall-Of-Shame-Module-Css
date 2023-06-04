import React, { useState } from "react";
import styles from "./Header.module.css";

function Header({ addUser, users }) {
  const [name, setName] = useState("");
  const [excuse, setExcuse] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeExcuse = (event) => {
    setExcuse(event.target.value);
  };

  const handleCreateClick = () => {
    if (!name.trim() || !excuse.trim()) {
      return alert("გთხოვთ შეავსოთ ყველა ველი.");
    }

    addUser(name.trim(), excuse.trim());
    setName("");
    setExcuse("");
  };

  return (
    <div className={styles["header-container"]}>
      <h1 className={styles["header-container__h1"]}>Wall of shame</h1>
      <span>{users.length} members</span>
      <div className={styles["input-container"]}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChangeName}
          className={styles["input-container__input"]}
        />
        <input
          type="text"
          placeholder="Excuse"
          value={excuse}
          onChange={handleChangeExcuse}
          className={styles["input-container__input"]}
        />
      </div>
      <button
        className={styles["input-container__button"]}
        onClick={handleCreateClick}
      >
        Create
      </button>
    </div>
  );
}

export default Header;
