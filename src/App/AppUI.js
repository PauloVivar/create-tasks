
import React from 'react';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TaskButton } from '../TaskButton';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { TasksEmpty } from '../TasksEmpty';

function AppUI({
  loading,
  error,
  completedTasks,
  totalTasks,
  searchValue,
  setSearchValue,
  searchTasks,
  completeTask,
  deleteTask
}) {
  return (
    <>
      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TaskList>
        {loading && <TasksLoading />}
        {error && <TasksError />}
        {(!loading && searchTasks.lenght === 0) && <TasksEmpty />}
        
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

export { AppUI }