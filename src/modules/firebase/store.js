import {
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  doc,
} from "firebase/firestore/lite";
import { FireStore } from ".";
import { getCurrentUser } from "./auth";

const DOCS = {
  TODOS: "todos",
};

const todoCollection = collection(FireStore, DOCS.TODOS);

const todoDoc = (id) => doc(FireStore, DOCS.TODOS, id);

export const createTodo = async ({ title, status }) => {
  console.log({ title, status });
  const user = getCurrentUser();

  await addDoc(todoCollection, {
    title,
    status,
    ownerId: user?.uid,
  });
};

export const getTodos = async () => {
  const user = getCurrentUser();
  const todosSnapshot = await getDocs(
    query(todoCollection, where("ownerId", "==", user?.uid))
  );
  const todos = [];
  todosSnapshot.forEach((todo) => todos.push({ id: todo.id, ...todo.data() }));
  return todos;
};

export const editTodo = async (docId, { title, status }) => {
  const user = getCurrentUser();
  await setDoc(todoDoc(docId), {
    title,
    status,
    ownerId: user?.uid,
  });
};

export const deleteTodo = async (docId) => await deleteDoc(todoDoc(docId));
