import { FC, useCallback } from "react";
import classNames from "classnames";
import check from "assets/images/check.png";
import { ITodoItemProps } from "./types";

import "./styles.scss";

const TodoItem: FC< ITodoItemProps> = ({
  id, goal, completed, callback,
}) => {
  const onClickHandler = useCallback(() => {
    callback(id);
  }, [id, callback]);

  const circleClassName = classNames("TodoItem__circle", {
    TodoItem__circle_checked: completed,
  });

  const checkIconClassName = classNames("TodoItem__check-icon", {
    "TodoItem__check-icon_hidden": !completed,
  });

  const goalClassName = classNames("TodoItem__goal", {
    TodoItem__goal_checked: completed,
  });

  return (
    <button
      className="TodoItem"
      onClick={onClickHandler}
    >
      <div className="TodoItem__icon-wrap">
        <div className={circleClassName}>
          <img
            className={checkIconClassName}
            src={check}
            alt="check"
          />
        </div>
      </div>
      <p className={goalClassName}>{goal}</p>
    </button>
  );
};

export default TodoItem;
