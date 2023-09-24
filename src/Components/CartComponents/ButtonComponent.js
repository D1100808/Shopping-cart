import React from 'react'

export const ButtonComponent = ({ item, decrement, increment, cart }) => {
  return (
    <div className="buttons" style={{ width: 60, marginTop: 20 }} id={item.id} key={item.id}>
      <h6 style={{ width: 60, marginTop: 40, marginBottom: 15 }}>
        $ {item.price}
      </h6>
      <button
        type="button"
        style={{
          width: 25,
          background: "black",
          color: "#fff",
        }}
        disabled={cart.filter((val) => val.id === item.id).length <= 1}
        onClick={decrement}
      >
        -
      </button>
      <button
        type="button"
        style={{ width: 25, background: "black", color: "#fff" }}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
