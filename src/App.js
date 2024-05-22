import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { TaskButton } from './TaskButton';

import './App.css';

const arrayTask = [
  {text: 'Hola amigo', completed: true },
  {text: 'Como estas', completed: false },
  {text: 'Este es', completed: true },
  {text: 'Un test', completed: false },
];

function App() {
  return (
    <>

      <TaskCounter completed={5} total={10} />
      <TaskSearch />

      <TaskList>
        {arrayTask.map(task => (
          <TaskItem 
            key={task.text}
            text={task.text}
            completed={task.completed} />
        ))}
      </TaskList>

      <TaskButton />
    </>
  );
}

export default App;
