
import React from 'react';
import { TaskContext } from '../Context/TaskContext';

import { TaskCounter } from '../Components/TaskCounter';
import { TaskSearch } from '../Components/TaskSearch';
import { TaskList } from '../Components/TaskList';
import { TaskItem } from '../Components/TaskItem';
import { TaskButton } from '../Components/TaskButton';
import { TasksLoading } from '../Components/TasksLoading';
import { TasksError } from '../Components/TasksError';
import { TasksEmpty } from '../Components/TasksEmpty';
import { Modal } from '../Components/Modal';
import { TaskForm } from '../Components/TaskForm';

function AppUI() {

  const {
    loading,
    error,
    searchTasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal
  } = React.useContext(TaskContext);

  return (
    <>
      <TaskCounter />
      <TaskSearch />

      <TaskList>

        {loading && <TasksLoading />}
        {error && <TasksError />}
        {(!loading && searchTasks.length === 0) && <TasksEmpty />}
        
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

      <TaskButton 
        setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
          <TaskForm />
        </Modal>
      )}
    
    </>
  );
}

export { AppUI }