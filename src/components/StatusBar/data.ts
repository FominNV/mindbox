import { TodoShowMode } from "store/todo/types";
import { IModeButton } from "./types";

export const dataModeButtons: IModeButton[] = [
  {
    text: "All",
    name: TodoShowMode.ALL,
  },
  {
    text: "Active",
    name: TodoShowMode.ACTIVE,
  },
  {
    text: "Completed",
    name: TodoShowMode.COMPLETED,
  },
];
