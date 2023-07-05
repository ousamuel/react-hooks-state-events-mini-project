import React,{useState} from "react";

function Task({ id, text, category, handleDeleteClick }) {
  //  console.log(task.category)
  

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=> handleDeleteClick(id)} className="delete">X</button>
    </div>
  );
}

export default Task;
