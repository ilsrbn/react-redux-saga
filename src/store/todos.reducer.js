const defaultState = {
  todos: [],
};

// Sync
export const INIT_TODOS = "TODOS:INIT";

// Async
export const ASYNC_INIT_TODOS = "ASYNC:TODOS:INIT";
export const ASYNC_CREATE_TODO = "ASYNC:TODO:CREATE";
export const ASYNC_EDIT_TODO = "ASYNC:TODO:EDIT";
export const ASYNC_DELETE_TODO = "ASYNC:TODO:DELETE";

// Reducer for synchronous actions
export default function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case INIT_TODOS:
      return { todos: action.payload };

    default:
      return state;
  }
}

// Synchronous Action creators
export const initTodos = (payload) => ({ type: INIT_TODOS, payload });

// Asynchronous Action creators
export const asyncInitTodos = () => ({
  type: ASYNC_INIT_TODOS,
});
export const asyncCreateTodo = (payload) => ({
  type: ASYNC_CREATE_TODO,
  payload,
});
export const asyncEditTodo = (payload) => ({
  type: ASYNC_EDIT_TODO,
  payload,
});
export const asyncDeleteTodo = (payload) => ({
  type: ASYNC_DELETE_TODO,
  payload,
});
