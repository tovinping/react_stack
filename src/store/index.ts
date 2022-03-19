import { createStore, combineReducers } from "redux";
import { createSelectorHook } from "react-redux";

import global from "./global";
const rootReducers = combineReducers({ global });
const store = createStore(rootReducers);
export type IRootStateType = ReturnType<typeof rootReducers>;
export const useRootState = createSelectorHook<IRootStateType>();
export const dispatch = store.dispatch;
export const getState = store.getState;
export default store;
