import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const arrayTask = [
//   {text: 'Hola amigo', completed: true },
//   {text: 'Como estas', completed: false },
//   {text: 'Este es', completed: true },
//   {text: 'Un test', completed: false },
//   {text: 'New', completed: true },
// ];
// localStorage.setItem('TASKS_V1', JSON.stringify(arrayTask))

// localStorage.removeItem('TASKS_V1');

function App() {
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
    <AppUI
      loading={loading}
      error={error}
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTasks={searchTasks}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  );
}

export default App;
