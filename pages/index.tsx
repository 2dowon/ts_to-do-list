import React from "react";
import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { Todo } from "../interfaces";
import Header from "../components/header";
import AddForm from "../components/addForm";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { todosState } from "../global-store";

export default function Home() {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
}

const TodoList = () => {
  const todos = useRecoilValue(todosState);

  return (
    <div>
      <Header />
      <ul className={styles.todos}>
        {todos.map((todo) => (
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
  const setTodos = useSetRecoilState(todosState);

  const checkType = todo.fields.Done === true ? styles.done : styles.yet;

  const handleCheck = (todo: Todo) => {
    setTodos((todos: any[]) =>
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            fields: { Done: !todo.fields.Done, Name: todo.fields.Name },
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (todo: Todo) => {
    setTodos((todos) => todos.filter((item) => item.id !== todo.id));
  };

  return (
    <li
      className={`${styles.todo} ${checkType}`}
      onClick={() => {
        handleCheck(todo);
      }}
    >
      <span className={styles.todoName}>{todo.fields.Name}</span>
      <div className={styles.btns}>
        <button
          className={`${styles.btnCheck} ${checkType}`}
          onClick={() => {
            handleCheck(todo);
          }}
        ></button>
        <button
          className={`${styles.btnDelete} ${checkType}`}
          onClick={() => {
            handleDelete(todo);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};
