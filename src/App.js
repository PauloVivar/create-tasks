import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { TaskButton } from './TaskButton';

import './App.css';

// const arrayTask = [
//   {text: 'Hola amigo', completed: true },
//   {text: 'Como estas', completed: false },
//   {text: 'Este es', completed: true },
//   {text: 'Un test', completed: false },
//   {text: 'New', completed: true },
// ];
// localStorage.setItem('TASKS_V1', JSON.stringify(arrayTask))

// localStorage.removeItem('TASKS_1')


function App() {
 
  let localStorageTasks = localStorage.getItem('TASKS_V1');
  let parsedTasks;

  if(!localStorageTasks){
    localStorage.setItem('TASKS_V1', JSON.stringify([]));
    parsedTasks = [];
  }else{
    parsedTasks = JSON.parse(localStorageTasks);
  }

  const [tasks, setTasks] = React.useState(parsedTasks);
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

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

  //Función para persistir los datos en localStorage
  const saveTasks = (newTasks) =>{
    localStorage.setItem('TASKS_V1', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

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

  return (
    <>
      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TaskList>
        {searchTasks.map(task => (
          <TaskItem 
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={ ()=> completeTask(task.text) }
            onDelete={ ()=> deleteTask(task.text) }
          />
        ))}
      </TaskList>

      <TaskButton />
    </>
  );
}

export default App;
