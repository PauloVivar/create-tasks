import './TaskButton.css';

function TaskButton() {
  return (
    <button className='TaskButton'
      onClick={ 
        (event)=> {
          console.log('le diste un clik')
          console.log(event)
          console.log(event.target)
        }
      }>
        +
    </button>
  );
}

export { TaskButton };