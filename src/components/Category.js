import React, { useState } from "react";

function Category({ category }) {
  
  const [selected, setSelected] = useState(false);
  function handleSelect() {
    setSelected((selected) => !selected);
  }
  return (
    <button
      className={selected ? "selected" : ""}
      onClick={handleSelect}
      key={category}
    >
      {category}
    </button>
  );
}

export default Category;