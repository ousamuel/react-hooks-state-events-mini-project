// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   const [taskList, setTaskList] = useState(TASKS);
//   const [filteredList, setFilteredList] = useState(taskList);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function onTaskFormSubmit(task) {
//     setTaskList([...taskList, task]);
//     if (selectedCategory === "All" || selectedCategory === task.category) {
//       setFilteredList([...filteredList, task]);
//     }
//   }

//   function onCategorySelect(category) {
//     setSelectedCategory(category);
//     setFilteredList(
//       taskList.filter((task) => {
//         if (category === "All") return true;
//         return task.category === category;
//       })
//     );
//   }
//   function handleDeleteClick(id) {
//     setFilteredList(
//       filteredList.filter((task) => {
//         return task.text !== id;
//       })
//     );
//   }

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         onCategorySelect={onCategorySelect}
//       />
//       <NewTaskForm
//         categories={CATEGORIES}
//         onTaskFormSubmit={onTaskFormSubmit}
//       />
//       <TaskList tasks={filteredList} handleDeleteClick={handleDeleteClick} />
//     </div>
//   );
// }

// export default App;
// // function App() {
// //   const [taskList, setTaskList] = useState(TASKS);
// //   const [filteredList, setFilteredList] = useState(taskList);
// //   function onTaskFormSubmit(task) {
// //     setTaskList([...taskList, task]);
// //   }
// //   function onCategorySelect(category) {
// //     setFilteredList(
// //       taskList.filter((task) => {
// //         if (category == "All") return true;
// //         return task.category == category;
// //       })
// //     );
// //   }

// //   return (
// //     <div className="App">
// //       <h2>My tasks</h2>
// //       <CategoryFilter
// //         categories={CATEGORIES}
// //         onCategorySelect={onCategorySelect}
// //       />
// //       <NewTaskForm
// //         categories={CATEGORIES}
// //         onTaskFormSubmit={onTaskFormSubmit}
// //       />
// //       <TaskList tasks={filteredList} />
// //     </div>
// //   );
// // }
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onTaskFormSubmit(task) {
    setTaskList([...taskList, task]);
    if (selectedCategory === "All" || selectedCategory === task.category) {
      setTaskList([...taskList, task]);
    }
  }

  function onCategorySelect(category) {
    setSelectedCategory(category);
    // setFilteredList(
    //   taskList.filter((task) => {
    //     if (category === "All") return true;
    //     return task.category === category;
    //   })
    // );
  }
  function handleDeleteClick(id) {
    setTaskList(
      taskList.filter((task) => {
        return task.text !== id;
      })
    );
  }

  const filteredTaskList =  taskList.filter((task) => {
        if (selectedCategory === "All") return true;
        return task.category === selectedCategory;
      })



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={onCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTaskList} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
// function App() {
//   const [taskList, setTaskList] = useState(TASKS);
//   const [filteredList, setFilteredList] = useState(taskList);
//   function onTaskFormSubmit(task) {
//     setTaskList([...taskList, task]);
//   }
//   function onCategorySelect(category) {
//     setFilteredList(
//       taskList.filter((task) => {
//         if (category == "All") return true;
//         return task.category == category;
//       })
//     );
//   }

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter
//         categories={CATEGORIES}
//         onCategorySelect={onCategorySelect}
//       />
//       <NewTaskForm
//         categories={CATEGORIES}
//         onTaskFormSubmit={onTaskFormSubmit}
//       />
//       <TaskList tasks={filteredList} />
//     </div>
//   );
// }
