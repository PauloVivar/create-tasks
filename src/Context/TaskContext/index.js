import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider({children}){
  //GlobarContext de Tareas donde guardamos toda la logica para todos nuestros componentes

  const {
    item: tasks, 
    saveItem: saveTasks,
    loading,
    error
  } = useLocalStorage('TASKS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  //console.log(searchValue);

  const completedTasks = tasks.filter(
    task => !!task.completed
  ).length;

  const totalTasks = tasks.length;

  const searchTasks = tasks.filter(
    (task) => {
      const taskText = task.text.toLowerCase();
      const searchValueText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchValueText);
    }
  );

  //Función con la lógica para señalar tareas
  const completeTask = (text) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex(
      (task) => task.text === text
    );
    newTasks[index].completed = true;
    saveTasks(newTasks);
  }

  //Funcón con la lógica para eliminar tareas
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
      completeTask,
      deleteTask
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };