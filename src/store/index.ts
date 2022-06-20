import { combineReducers, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { todoReducer } from "./todo/reducer";

const combinedReducer = combineReducers({
  todo: todoReducer,
});

const composeEnhancers = composeWithDevTools({});

export type RootState = ReturnType<typeof combinedReducer>;
export const store = createStore(combinedReducer, {}, composeEnhancers());
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
