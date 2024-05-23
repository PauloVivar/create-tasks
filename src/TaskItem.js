import './TaskItem.css';

function TaskItem(props) {
  return(
    <li className='TaskItem'>
      <span className={` Icon Icon-check ${props.completed && 'Icon-check--active'} `}>V</span>
      <p className={` TaskItem-p ${props.completed && 'TaskItem-p--complete'} `}>{ props.text }</p>
      <span className={` Icon Icon-delete `}>X</span>
    </li>
  );
}

export { TaskItem };