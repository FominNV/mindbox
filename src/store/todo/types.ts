export interface ITodoState {
  todos: ITodo[];
  showMode: TodoShowMode
}

export interface ITodo {
  id: string;
  goal: string;
  completed: boolean;
}

export enum TodoShowMode {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export type TodoDispatch<T> = (todos: T) => TodoAction;

export enum TodoActionTypes {
  SET_TODOS = "SET_TODOS",
  SET_TODO_SHOW_MODE = "SET_TODO_SHOW_MODE",
}

type SetTodosAction = {
  type: TodoActionTypes.SET_TODOS;
  payload: { todos: ITodo[] };
};

type SetShowModeAction = {
  type: TodoActionTypes. SET_TODO_SHOW_MODE;
  payload: { mode: TodoShowMode };
};

export type TodoAction = SetTodosAction | SetShowModeAction;
