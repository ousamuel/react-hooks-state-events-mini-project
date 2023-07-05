import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks , handleDeleteClick}) {


  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task.text.toString()}
            id={task.text.toString()}
            text={task.text}
            category={task.category}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}
      {/* <Task task={tasks[0]}/> */}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
