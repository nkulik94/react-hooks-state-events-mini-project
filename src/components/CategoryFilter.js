import React, {useState} from "react";

function CategoryFilter( { categories, updateList, selectedCat } ) {

  //const [selectedCat, changeCat] = useState('All')

  function handleFilterClick(e) {
    updateList(e.target.id)
  }

  const categoryButtons = categories.map(cat => {
    return <button key={cat} onClick={handleFilterClick} id={cat} className={selectedCat === cat ? 'selected' : "not-selected"}>{cat}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
