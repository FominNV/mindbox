import {
  FC, MouseEvent, ReactNode, useCallback, useMemo,
} from "react";
import { useTypedSelector } from "store";
import { useDispatch } from "react-redux";
import { setTodos, setTodosShowMode } from "store/todo/actions";
import uuid from "react-uuid";
import classNames from "classnames";
import { TodoShowMode } from "store/todo/types";
import { dataModeButtons } from "./data";

import "./styles.scss";

const StatusBar: FC = () => {
  const { todos, showMode } = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();

  const setTodoMode = useCallback<EventFunc<MouseEvent<HTMLButtonElement>>>((e) => {
    dispatch(setTodosShowMode(e.currentTarget.name as TodoShowMode));
  }, [dispatch]);

  const clearCompletedTodos = useCallback<EventFunc<MouseEvent>>(() => {
    const uncompletedTodos = todos.filter((elem) => !elem.completed);
    dispatch(setTodos(uncompletedTodos));
  }, [todos, dispatch]);

  const leftTodos = useMemo<string>(() => {
    const count = todos.filter((elem) => !elem.completed);
    if (count.length === 1) {
      return "1 item left";
    }
    return `${count.length} items left`;
  }, [todos]);

  const modeButtons = useMemo<ReactNode>(() => (
    dataModeButtons.map((elem) => {
      const buttonClassName = classNames("StatusBar__button-mode", {
        "StatusBar__button-mode_active": elem.name === showMode,
      });
      const disabled = elem.name === showMode;

      return (
        <button
          className={buttonClassName}
          key={`mode_button_${uuid()}`}
          name={elem.name}
          disabled={disabled}
          onClick={setTodoMode}
        >
          {elem.text}
        </button>
      );
    })
  ), [showMode, setTodoMode]);

  return (
    <div className="StatusBar">
      <div className="StatusBar__count-todo">{leftTodos}</div>
      <div className="StatusBar__navbar">{modeButtons}</div>
      <button
        className="StatusBar__button-clear"
        onClick={clearCompletedTodos}
      >
        Clear completed
      </button>
    </div>
  );
};

export default StatusBar;
