import React from 'react';

function useLocalStorage(itemName, initialValue){

  const[item, setItem] = React.useState(initialValue);
  const[loading, setLoading] = React.useState(true);
  const[error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);
  
  //Función para persistir los datos en localStorage
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {item, saveItem, loading, error};
}

export { useLocalStorage };

// localStorage.removeItem('TASKS_V1');

// const arrayTask = [
//   {text: 'Hola amigo', completed: true },
//   {text: 'Como estas', completed: false },
//   {text: 'Este es', completed: true },
//   {text: 'Un test', completed: false },
//   {text: 'New', completed: true },
// ];
// localStorage.setItem('TASKS_V1', JSON.stringify(arrayTask));
