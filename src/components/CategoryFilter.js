import React, { useState } from "react";

function CategoryFilter({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleClick(category) {
    setSelectedCategory(category);
    onCategorySelect(category);
    
  }

  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <button
            className={selectedCategory === category ? "selected" : ""}
            key={category}
            onClick={() => handleClick(category)}
            
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;

// import React from "react";
// import Task from "./Task";

// function TaskList({ tasks }) {
//   return tasks.map((task) => {
//     return <Task key={task.text.toString()} task={task} />;
//   });
// }

// export default TaskList;
// import React from "react";

// function Task({task}) {
//   //  console.log(task.category)
//   return (
//     <div className="task">
//       <div className="label">{task.category}</div>
//       <div className="text">{task.text}</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;
