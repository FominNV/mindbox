import {
  ITodo, TodoActionTypes, TodoDispatch, TodoShowMode,
} from "./types";

export const setTodos: TodoDispatch<ITodo[]> = (todos) => ({
  type: TodoActionTypes.SET_TODOS,
  payload: { todos },
});

export const setTodosShowMode: TodoDispatch<TodoShowMode> = (mode) => ({
  type: TodoActionTypes.SET_TODO_SHOW_MODE,
  payload: { mode },
});
