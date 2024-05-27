import './TaskCounter.css';

function TaskCounter({completed, total}) {
  return (
    <h1 className='TaskCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> Tareas.
    </h1>
  );
}

export { TaskCounter };