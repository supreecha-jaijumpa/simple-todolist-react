import { FC } from "react";
import Task from "./task/Task";

import useTodoStore from "../../store/useTodoStore";

const TaskList: FC = () => {
  const { todo } = useTodoStore();

  return (
    <ul className="m-0 p-0 list-none flex flex-col">
      {todo.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      {todo.length === 0 && (
        <li className="border-b border-blue-400 py-1 pl-12 text-slate-400">
          Not found task :)
        </li>
      )}
    </ul>
  );
};

export default TaskList;
