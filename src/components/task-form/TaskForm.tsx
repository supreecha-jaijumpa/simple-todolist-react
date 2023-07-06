import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { generateUUID } from "../../utils/generateUUID";
import useTodoStore from "../../store/useTodoStore";
import { type Task } from "../../types/task";

type Form = {
  task: string;
};

const TaskForm: FC = () => {
  const { addTask } = useTodoStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = (data: Form) => {
    const task: Task = {
      id: generateUUID(),
      title: data.task,
      isCompleted: false,
    };
    addTask(task);
    reset();
  };

  return (
    <form className="w-full flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className={`flex-grow border py-1 px-2 rounded outline-none ${
          errors.task ? "border-red-400" : ""
        }`}
        {...register("task", {
          required: true,
        })}
      />
      <button
        className="flex-shrink-0 border px-2 rounded hover:bg-slate-50 hover:shadow-sm"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
