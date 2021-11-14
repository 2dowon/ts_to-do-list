import { atom } from "recoil";
import { Todo } from "./interfaces";

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [],
});
