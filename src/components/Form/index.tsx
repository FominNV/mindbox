import {
  ChangeEvent, FC, FormEvent, useCallback, useState,
} from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "store";
import { setTodos } from "store/todo/actions";
import { ITodo } from "store/todo/types";
import uuid from "react-uuid";
import arrow from "../../assets/images/arrow.jpg";

import "./styles.scss";

const Form: FC = () => {
  const { todos } = useTypedSelector((state) => state.todo);
  const [inpitValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const onSubmitHander = useCallback<EventFunc<FormEvent>>((e) => {
    e.preventDefault();
    if (inpitValue.trim()) {
      const newTodo: ITodo = {
        id: uuid(),
        goal: inpitValue,
        completed: false,
      };

      dispatch(setTodos([newTodo, ...todos]));
      setInputValue("");
    }
  }, [inpitValue, todos, dispatch]);

  const onChangeHandler = useCallback<EventFunc<ChangeEvent<HTMLInputElement>>>(
    (e) => {
      e.preventDefault();
      setInputValue(e.currentTarget.value);
    },
    [setInputValue],
  );

  return (
    <form
      className="Form"
      onSubmit={onSubmitHander}
    >
      <button
        className="Form__button"
      >
        <img
          className="Form__image"
          src={arrow}
          alt="arrow"
        />
      </button>

      <input
        className="Form__input"
        type="text"
        placeholder="What needs to be done?"
        value={inpitValue}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default Form;
