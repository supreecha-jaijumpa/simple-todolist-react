import { FC, ChangeEvent } from "react";
import { type Task as TaskType } from "../../../types/task";
import useTodoStore from "../../../store/useTodoStore";

export type TaskProps = TaskType;

const Task: FC<TaskProps> = ({ id, title, isCompleted }) => {
  const { updateTask } = useTodoStore();

  const handleChange = (e: ChangeEvent) => {
    const updatedTask = {
      id,
      title,
      isCompleted: (e.target as HTMLInputElement).checked,
    };
    updateTask(updatedTask);
  };

  return (
    <li
      className={`flex border-b border-blue-400 py-1 ${
        isCompleted ? "opacity-50" : ""
      }`}
    >
      <div className="w-8 flex justify-center">
        <input
          checked={isCompleted}
          id={`task-${id}`}
          type="checkbox"
          onChange={handleChange}
        />
      </div>
      <label
        htmlFor={`task-${id}`}
        className={`pl-4 ${isCompleted ? "line-through" : ""}`}
      >
        {title}
      </label>
    </li>
  );
};

export default Task;
