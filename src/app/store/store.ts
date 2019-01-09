import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { ClientsActionTypes } from "./client/action";
import { clientsReducer } from "./client/reducer";
import { IClientsState } from "./client/types";
import { ProjectsActionTypes } from "./project/action";
import { projectReducer } from "./project/reducer";
import { IProjectsState } from "./project/type";
import { TodoActionTypes } from "./todo/action";
import { todosReducer } from "./todo/reducer";
import { ITodosState } from "./todo/types";

export interface IRootState {
  todosState: ITodosState;
  clientsState: IClientsState;
  projectsState: IProjectsState;
}

export type IRootAction =
  | ClientsActionTypes
  | TodoActionTypes
  | ProjectsActionTypes;

const reducers = combineReducers<IRootState>({
  todosState: todosReducer,
  clientsState: clientsReducer,
  projectsState: projectReducer
});

const store = createStore(reducers,
  applyMiddleware(thunk as ThunkMiddleware<IRootState, IRootAction>));
export default store;
