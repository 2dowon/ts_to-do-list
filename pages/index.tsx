import React from "react";
import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import produce from "immer";

import { Todo } from "../interfaces";
import Header from "../components/header";
import AddForm from "../components/addForm";
import { useTodoList } from "../hooks/useTodoList";

export default function Home() {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
}

const TodoList = () => {
  const { todoList, isLoading } = useTodoList();
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Header totalCount={todoList.length} />
      <ul className={styles.todos}>
        {todoList.map((todo) => (
          <Todo
            key={
              todo.id +
              "/" +
              todo.fields.Name +
              "/" +
              (todo.fields.Done ? "O" : "X")
            }
            todo={todo}
          />
        ))}
      </ul>
      <AddForm />
    </div>
  );
};

const Todo = (props: { todo: Todo }) => {
  const { todo } = props;
  const { updateTodo, deleteTodo } = useTodoList();

  const checkType = todo.fields.Done === true ? styles.done : styles.yet;

  const handleUpdateTodo = () => {
    const updated = produce(todo, (nextTodo) => {
      nextTodo.fields.Done = !todo.fields.Done;
    });
    updateTodo(updated);
  };

  return (
    <li className={`${styles.todo} ${checkType}`} onClick={handleUpdateTodo}>
      <span className={styles.todoName}>{todo.fields.Name}</span>
      <div className={styles.btns}>
        <button
          className={`${styles.btnCheck} ${checkType}`}
          onClick={handleUpdateTodo}
        ></button>
        <button
          className={`${styles.btnDelete} ${checkType}`}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};
