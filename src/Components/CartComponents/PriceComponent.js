import React from 'react'

export const PriceComponent = ({removeItem, item}) => {
  return (
    <div className="close" key={item.id}>
      <button
        type="button"
        class="btn-close btn-close-white"
        aria-label="Close"
        id={item.id}
        style={{ position: "absolute" }}
        onClick={removeItem}
      ></button>
    </div>
      
  );
}
