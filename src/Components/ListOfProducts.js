import React, { useContext } from 'react'
import "./ListOfProducts.css";
import useFetch from '../hooks/useFetch';
import ListOfImg from './CartComponents/ListOfImg';
import { CartContext } from '../context/CartContext';


function ListOfProducts({ size }) {
  const { data } = useFetch("http://localhost:3000/products", size);
  const { dispatch } = useContext(CartContext)
  
  let quantityOfProduct = 0;
  
  for (let i = 0; i < data.length; i++){
      quantityOfProduct ++;
  }
  

  const handleClick = (e) => {
    const productId = Number(e.target.parentElement.id);

    const filterData = data.find(val => val.id === productId)

    if (data) {
      dispatch({type:'ADD', payload:filterData})
      
    }  
    
  }
    
  return (
    <div class="container ">
      <h4> {quantityOfProduct} Product(s) found</h4>
      {data &&
        data.map((item, index) => (
          <div
            class="card thumbnail"
            style={{ width: "230px", display: "inline-block", margin: 10 }}
            key={index}
            id={item.id}
          >
            <ListOfImg sku={item.sku} />
            <h6 class="card-title" id="title" style={{ marginTop: 5 }}>
              {item.title}
            </h6>
            <span style={{ color: "#FFD700" }}>___</span>
            <p class="card-text w-100" style={{ color: "gray" }}>
              <span
                style={{ fontSize: 25, fontWeight: "bold", color: "#2b2d42" }}
                class="price"
              >
                $ {item.price}
              </span>
            </p>
            <button class="btn btn-dark btn-md mb-3" onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
}

export default ListOfProducts;