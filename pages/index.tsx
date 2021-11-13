import React, { useCallback, useState } from "react";
import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Header from "../components/header";
import AddForm from "../components/addForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
}

type Todo = { id: number; name: string; check: boolean };

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleCheck = useCallback((todo: Todo) => {
    setTodos((todos) =>
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, check: !todo.check };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((todo: Todo) => {
    setTodos((todos) => todos.filter((item) => item.id !== todo.id));
  }, []);

  const handleAdd = useCallback((name: string) => {
    setTodos((todos) => [...todos, { id: Date.now(), name, check: false }]);
  }, []);

  return (
    <div>
      <Header totalCount={todos.length} />
      <ul className={styles.todos}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onCheck={handleCheck}
          />
        ))}
      </ul>
      <AddForm onAdd={handleAdd} />
    </div>
  );
};

const Todo = (props: { todo: Todo; onDelete: any; onCheck: any }) => {
  const { todo, onDelete, onCheck } = props;

  const checkType = todo.check === true ? styles.done : styles.yet;

  const handleDelete = () => {
    onDelete(todo);
    console.log(`${todo.name} delete`);
  };

  const handleCheck = () => {
    onCheck(todo);
    console.log(`${todo.name} check`);
  };

  return (
    <li className={`${styles.todo} ${checkType}`} onClick={handleCheck}>
      <span className={styles.todoName}>{todo.name}</span>
      <div className={styles.btns}>
        <button
          className={`${styles.btnCheck} ${checkType}`}
          onClick={handleCheck}
        ></button>
        <button
          className={`${styles.btnDelete} ${checkType}`}
          onClick={handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};
