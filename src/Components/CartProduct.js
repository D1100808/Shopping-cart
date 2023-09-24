import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import ListOfImg from './CartComponents/ListOfImg';
import './CartProduct.css'
import { TitleComponent } from './CartComponents/TitleComponent';
import { PriceComponent } from './CartComponents/PriceComponent';
import { ButtonComponent } from './CartComponents/ButtonComponent';


export const CartProduct = ({ size }) => {
  const { cart,dispatch } = useContext(CartContext);
  // Remove item
  const removeItem = (e) => {
    const itemId = Number(e.target.id);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  const decrement = (e) => {
    const id = Number(e.target.parentElement.id);

    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const increment = (e) => {
    const id = Number(e.target.parentElement.id);

    const filterData = cart.find((val) => val.id === id);

    dispatch({
      type: "ADD",
      payload: filterData,
    });
  };

  return (
    <div class="main" style={{ position: "relative" }}>
      {cart.length ? (
        cart
          .filter((item, index) => cart.indexOf(item) === index)
          .map((item, index) => (
            <>
              <hr />
              <div
                class="row row-cols-3 shadow-lg p-1 mb-1 rounded"
                style={{ display: "flex", justifyContent: "space-evenly" }}
                key={index}
              >
                {/* FOR IMAGE */}
                <ListOfImg sku={item.sku} width={100} index={index} />

                {/* FOR TITLES */}

                <TitleComponent cart={cart} item={item} />

                {/* For PRICE */}
                <div class="col-2">
                  <PriceComponent removeItem={removeItem} item={item} />
                  <ButtonComponent
                    item={item}
                    decrement={decrement}
                    increment={increment}
                    cart={cart}
                  />
                </div>
              </div>
            </>
          ))
      ) : (
        <div class="offcanvas-body text-center mt-5">
          <h6>Add some products in the cart</h6>
          <p>:)</p>
        </div>
      )}
    </div>
  );
};
