import React from 'react';
import ToDoListEntry from './ToDoListEntry.jsx';

export default const ToDoList = (props) => {
  return (
    <div>
      {props.lists.map((list, i) => 
        (<ToDoListEntry errand={list} key={i}/>)
      )}
    </div>
  );


}

