import { put, takeEvery } from "redux-saga/effects";
import {
  initTodos,
  ASYNC_INIT_TODOS,
  ASYNC_CREATE_TODO,
  ASYNC_EDIT_TODO,
  ASYNC_DELETE_TODO,
} from "../todos.reducer";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodos,
} from "../../modules/firebase/store";

function* initTodosWorker() {
  const todos = yield getTodos();
  yield put(initTodos(todos));
}

function* createTodosWorker(action) {
  yield createTodo(action.payload);
  const todos = yield getTodos();
  yield put(initTodos(todos));
}

function* updateTodoWorker(action) {
  yield editTodo(action.payload.docId, action.payload.todo);
  const todos = yield getTodos();
  yield put(initTodos(todos));
}

function* deleteTodoWorker(action) {
  yield deleteTodo(action.payload);
  const todos = yield getTodos();
  yield put(initTodos(todos));
}

export function* todoWatcher() {
  yield takeEvery(ASYNC_INIT_TODOS, initTodosWorker);
  yield takeEvery(ASYNC_CREATE_TODO, createTodosWorker);
  yield takeEvery(ASYNC_EDIT_TODO, updateTodoWorker);
  yield takeEvery(ASYNC_DELETE_TODO, deleteTodoWorker);
}
