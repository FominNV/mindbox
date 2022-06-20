import {
  ITodoState, TodoAction, TodoActionTypes, TodoShowMode,
} from "./types";

const initialState: ITodoState = {
  todos: [
    {
      id: "qwe12345",
      goal: "Тестовое задание",
      completed: false,
    },
    {
      id: "qwe67890",
      goal: "Прекрасный код",
      completed: true,
    },
    {
      id: "rty12345",
      goal: "Покрытие тестами",
      completed: false,
    },
  ],
  showMode: TodoShowMode.ALL,
};

export function todoReducer(state: ITodoState = initialState, action: TodoAction): ITodoState {
  switch (action.type) {
    case TodoActionTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
      };

    case TodoActionTypes.SET_TODO_SHOW_MODE:
      return {
        ...state,
        showMode: action.payload.mode,
      };

    default:
      return state;
  }
}
