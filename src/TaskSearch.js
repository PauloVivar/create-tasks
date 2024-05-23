import React from 'react';
import './TaskSearch.css';

function TaskSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  return (
    <input className='TaskSearch' placeholder='Ingresa Tarea'
      value={ searchValue }
      onChange={ (event)=> {
        setSearchValue(event.target.value);
      } }/>
  );
}

export { TaskSearch };