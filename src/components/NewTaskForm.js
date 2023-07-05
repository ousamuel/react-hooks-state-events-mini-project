import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newText, setNewText] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text: newText,
      category: newCategory,
    });
  }
  function handleText(e) {
    setNewText(e.target.value);
  }
  function handleCategory(e) {
    setNewCategory(e.target.value);
    // console.log('a')

  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleText} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategory} name="category">
          {categories.map((category) => {
            if (category != "All") {
              return <option key={category+"a"}>{category}</option>;
            }
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
