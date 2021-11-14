import React, { memo, useRef, KeyboardEvent } from "react";
import styles from "../styles/addForm.module.css";
import { useSetRecoilState } from "recoil";
import { todosState } from "../global-store";

const AddForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setTodos = useSetRecoilState(todosState);

  const handleAdd = (name: string) => {
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), fields: { Done: false, Name: name } },
    ]);
  };

  const addTodo = (): void => {
    const name = inputRef.current?.value;
    name && handleAdd(name);
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
