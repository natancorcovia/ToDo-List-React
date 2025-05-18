import Tasks from "./componentes/Tasks";
import AddTask from "./componentes/AddTask";
import { Children, useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import Title from "./componentes/Title";

function App() {
  //Lista de tarefas:
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  //Armazena as tarefas no localstorage, para não perder dados ao atualizar a pagina
  useEffect(()=>{
    localStorage.setItem("tasks" , JSON.stringify(tasks))
  },[tasks])
  
  //Consome API que importa tarefas
  useEffect(()=>{
    async function fecthTasks() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10')
    const data = await response.json()
    setTasks(data)
    }
  //fecthTasks();
  } , []);

  //Risca tarefa na lista de tarefas
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  //Deleta a tarefa ao clicar no icone da lixeira
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => taskId !== task.id);
    setTasks(newTasks);
  }

  //Adiciona nova tarefa à lista
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-black flex justify-center p-20">
      <div className="w-[600px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
