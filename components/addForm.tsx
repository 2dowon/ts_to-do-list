import React, { memo, useRef, KeyboardEvent } from "react";
import styles from "../styles/addForm.module.css";

const AddForm = (props: { onAdd: any }) => {
  const { onAdd } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = (): void => {
    const name = inputRef.current?.value;
    name && onAdd(name);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className={styles.addForm}>
      <button className={styles.addBtn} onClick={addTodo}>
        <i className="fas fa-plus"></i>
      </button>
      <input
        ref={inputRef}
        className={styles.addInput}
        type="text"
        placeholder="Create a new Todo"
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default memo(AddForm);
