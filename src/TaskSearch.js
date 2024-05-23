import React from 'react';
import './TaskSearch.css';

function TaskSearch({searchValue, setSearchValue}) {

  return (
    <input className='TaskSearch' placeholder='Ingresa tu nueva tarea'
      value={ searchValue }
      onChange={ (event)=> {
        setSearchValue(event.target.value);
      } }/>
  );
}

export { TaskSearch };