import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { Task } from "../types/task";

type TodoContext = {
  todo: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  clearCompleted: () => void;
};

const TodoContext = createContext<TodoContext>({
  todo: [],
  addTask: () => {
    return;
  },
  updateTask: () => {
    return;
  },
  clearCompleted: () => {
    return;
  },
});

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todo, setTodo] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTodo((prev) => {
      const updatedTodo = [...prev, task];
      return updatedTodo;
    });
  };

  const updateTask = (task: Task) => {
    setTodo((prev) => {
      const updatedTodo = [...prev];
      const targetTaskIndex = updatedTodo.findIndex((e) => e.id === task.id);
      Object.assign(updatedTodo[targetTaskIndex], task);
      return updatedTodo;
    });
  };

  const clearCompleted = () => {
    setTodo((prev) => {
      const updatedTodo = prev.filter((e) => !e.isCompleted);
      return updatedTodo;
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTask,
        updateTask,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = (): TodoContext => useContext(TodoContext);
