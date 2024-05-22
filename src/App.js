import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { TaskButton } from './TaskButton';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <TaskCounter completed={5} total={10} />
      <TaskSearch />

      <TaskList>
        <TaskItem />
      </TaskList>

      <TaskButton />

    </div>
  );
}

export default App;
