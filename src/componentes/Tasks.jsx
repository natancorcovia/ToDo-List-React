import { ChevronRight } from "lucide-react";
import { Trash } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="p-6 bg-white rounded-2xl shadow-md flex flex-col gap-4 border border-gray-200">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-[#FF5F1F] text-white flex items-center gap-2 p-2 rounded-md w-full text-left ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon />}
              {task.title}
            </button>
            <Button
              onClick={() => onSeeDetailsClick(task)}
            >
              <ChevronRight />
            </Button>
            <Button
              onClick={() => onDeleteTaskClick(task.id)}
            >
              <Trash />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
