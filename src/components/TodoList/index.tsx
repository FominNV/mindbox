import {
  FC, ReactNode, useCallback, useMemo,
} from "react";
import { useTypedSelector } from "store";
import { useDispatch } from "react-redux";
import { setTodos } from "store/todo/actions";
import TodoItem from "components/TodoItem";

import "./styles.scss";
import { TodoShowMode } from "store/todo/types";

const TodoList: FC = () => {
  const { todos, showMode } = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();

  const toggleCompleteTodo = useCallback<VoidFunc<string>>((id) => {
    const newTodos = todos.map((elem) => {
      if (elem.id === id) {
        return { ...elem, completed: !elem.completed };
      }
      return elem;
    });

    dispatch(setTodos(newTodos));
  }, [todos, dispatch]);

  const todoItems = useMemo<ReactNode>(() => {
    let currentTodos = todos;

    if (showMode === TodoShowMode.ACTIVE) {
      currentTodos = currentTodos.filter((elem) => !elem.completed);
    } else if (showMode === TodoShowMode.COMPLETED) {
      currentTodos = currentTodos.filter((elem) => elem.completed);
    }

    return (
      currentTodos.map((elem) => (
        <TodoItem
          id={elem.id}
          key={elem.id}
          goal={elem.goal}
          completed={elem.completed}
          callback={toggleCompleteTodo}
        />
      ))
    );
  }, [todos, showMode, toggleCompleteTodo]);

  return (
    <div className="TodoList">{todoItems}</div>
  );
};

export default TodoList;
