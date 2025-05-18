import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col gap-4 border border-gray-200">
      
      <Input
        type="text"
        placeholder="Digite um título para a tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      
      <Input
        type="text"
        placeholder="Digite uma descrição para a tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-[#FF5F1F] text-white font-semibold px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
