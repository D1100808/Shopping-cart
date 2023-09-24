import React from 'react'

export const TitleComponent = ({cart, item}) => {
  return (
    <div class="col-6" style={{ margin: 5, padding: 0 }} key={item.id}>
      <h5 style={{ fontSize: 14 }}>{item.title}</h5>
      <p style={{ color: "gray" }}>
        {item.availableSizes[0]}{" "}
        <span
          style={{
            borderLeft: "2px solid gray",
            height: 10,
            margin: 5,
          }}
        ></span>
        Tule
      </p>
      <p style={{ color: "gray" }}>
        Quantity: {cart.filter((val) => val.id === item.id).length}
      </p>
    </div>
  );
}
