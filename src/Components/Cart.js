import React, {useContext} from 'react'
import './Cart.css'
import { CartProduct } from './CartProduct';
import { CartContext } from '../context/CartContext';


function Cart({ size }) {
  const { cart } = useContext(CartContext);
  let sum = 0;
  if (cart) {
    for (let x in cart) {
      sum += cart[x].price;
    }
  }

  const handleClick = () => {
    if (!cart.length) {
      alert("Add some product in the cart!");
    } else {
      alert(`Checkout - Total: $ ${sum}`);
    }
  }
  return (
    <>
      <button
        type="button"
        className={"button-icon"}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        style={{
          position: "fixed",
          border: 'none',
        }}
      >
        <i class="bi bi-cart4 h2">
          {cart.length >= 1 && (
            <span
              style={{
                position: "absolute",
                top: 45,
                right: 10,
                fontSize: 12,
                background: "yellow",
                borderRadius: 50,
                padding: 8,
                color: "#000",
              }}
            >
              {cart.length}
            </span>
          )}
        </i>
      </button>
      (
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ width: "400px" }}
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="icon text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i class="bi bi-cart4 h1" style={{ marginRight: 20 }}>
            <span
              style={{
                position: "relative",
                top: 18,
                right: 16,
                fontSize: 12,
                background: "yellow",
                borderRadius: 50,
                padding: 8,
                color: "#000",
              }}
            >
              {cart.length}
            </span>
          </i>
          <h4>Cart</h4>
        </div>
        <div class="offcanvas-body text-center mt-5">
          <CartProduct size={size} />
        </div>
        <div
          class="shadow p-3 mb-0 bg-dark"
          style={{ height: 200, width: "400px" }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: 20, color: "gray" }}>TOTAL</p>
            <p style={{ fontSize: 30, color: "yellow" }}>$ {sum.toFixed(2)}</p>
          </div>
          {/* CHECKOUT */}
          <div
            className="checkout"
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
          >
            <button
              style={{
                background: "black",
                color: "whitesmoke",
                padding: 5,
                width: 250,
                borderRadius: 10,
              }}
              onClick={handleClick}
            >
              CHECK OUT NOW!
            </button>
          </div>
        </div>
      </div>
      )
    </>
  );
}

export default Cart;