import { ChevronLeft, ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../componentes/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-black p-20 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button 
          onClick={() => navigate(-1)}
          className="absolute top-0 bottom-0 left-0 text-slate-100">
              <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title> 
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col gap-4 border border-gray-200">
          <h2 className="text-xl text-orange-500 font-bold">{title}</h2>
          <p className="text-orange-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
