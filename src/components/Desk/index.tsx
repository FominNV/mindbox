import { FC } from "react";
import Form from "components/Form";
import TodoList from "components/TodoList";
import StatusBar from "components/StatusBar";

import "./styles.scss";

const Desk: FC = () => (
  <div className="Desk">
    <div className="Desk__logo">todos</div>
    <div className="Desk__content">
      <Form />
      <TodoList />
      <StatusBar />
    </div>
  </div>
);

export default Desk;
