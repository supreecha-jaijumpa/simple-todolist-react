import { FC } from "react";
import Card from "./components/card/Card";
import TaskList from "./components/task-list/TaskList";
import TaskForm from "./components/task-form/TaskForm";
import { useTodo } from "./contexts/useTodo";

const App: FC = () => {
  const { clearCompleted } = useTodo();

  return (
    <div className="flex justify-center items-center py-12">
      <Card>
        <Card.Header
          title="Simple To-Do List"
          extra={
            <button
              className="text-sm border px-2 rounded hover:bg-slate-50 hover:shadow-sm"
              onClick={clearCompleted}
            >
              Clear completed
            </button>
          }
        />
        <Card.Body>
          <TaskList />
        </Card.Body>
        <Card.Footer>
          <TaskForm />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default App;
