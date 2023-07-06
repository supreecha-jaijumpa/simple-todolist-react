import { create } from "zustand";
import { Task } from "../types/task";

type TodoStore = {
  todo: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  clearCompleted: () => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todo: [],

  addTask: (task) =>
    set((state) => {
      const updatedTodo = [...state.todo, task];
      return { todo: updatedTodo };
    }),

  updateTask: (task) =>
    set((state) => {
      const updatedTodo = [...state.todo];
      const targetTaskIndex = updatedTodo.findIndex((e) => e.id === task.id);
      Object.assign(updatedTodo[targetTaskIndex], task);
      return { todo: updatedTodo };
    }),

  clearCompleted: () =>
    set((state) => {
      const updatedTodo = state.todo.filter((e) => !e.isCompleted);
      return { todo: updatedTodo };
    }),
}));

export default useTodoStore;
