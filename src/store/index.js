import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./todos.reducer";
import { todoWatcher } from "./saga/todos.saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  todosReducer /* preloadedState, */,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(todoWatcher);
