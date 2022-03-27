import React, {useState} from "react";

function Item({ name, category }) {
  
  const [isIn, changeCart] = useState(false)

  const cartText = isIn ? "Remove From Cart" : "Add to Cart"
  const cartClass = isIn ? "in-cart" : ""

  function handleClick() {
    changeCart((isIn)=> !isIn)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
