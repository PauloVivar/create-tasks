import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider({children}){
  //GlobarContext de Tareas donde guardamos toda la lógica para todos nuestros componentes

  const {
    item: tasks, 
    saveItem: saveTasks,
    loading,
    error
  } = useLocalStorage('TASKS_V1', []);

  //estado Search
  const [searchValue, setSearchValue] = React.useState('');
  //console.log(searchValue);

  //estado Modal
  const [openModal, setOpenModal] = React.useState(false);

  //Validar cuantas tareas estan completadas
  const completedTasks = tasks.filter(
    task => !!task.completed
  ).length;
  const totalTasks = tasks.length;

  //Buscar tarea
  const searchTasks = tasks.filter(
    (task) => {
      const taskText = task.text.toLowerCase();
      const searchValueText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchValueText);
    }
  );

  //Función con la lógica para Agregar una nueva tareas
  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({
      text,
      completed: false,
    });
    saveTasks(newTasks);
  }

  //Función con la lógica para Señalar tareas existentes
  const completeTask = (text) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks[index].completed = true;
    saveTasks(newTasks);
  }

  //Función con la lógica para eliminar tareas existentes
  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks.splice(index, 1);
    saveTasks(newTasks);
  }

  return(
    <TaskContext.Provider value={{
      loading,
      error,
      completedTasks,
      totalTasks,
      searchValue,
      setSearchValue,
      searchTasks,
      addTask,
      completeTask,
      deleteTask,
      openModal,
      setOpenModal
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };