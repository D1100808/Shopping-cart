import React, { useState }  from 'react'
import Sizes from './Components/Sizes';
import ListOfProducts from './Components/ListOfProducts';
import Cart from './Components/Cart';

function MainPage() {
  const [size, setSize] = useState([]);


  // CHOSING SIZE
  const handleClick = (e) => {
    let newVal = e.target.innerText;
    setSize((prevValue) => {
      if (!e.target.control.checked) {
        return [...prevValue, newVal];
      }
      if (e.target.control.checked) {
        return prevValue.filter((e) => e !== newVal);
      }
    });
  };

  

  return (
    <div class="container">
      <div class="row mt-5">
        <div class="col-2">
          <h5 style={{ marginLeft: 10 }}>Sizes:</h5>
          <Sizes handleClick={handleClick} />
        </div>
        <div class="col-10 text-center">
          <ListOfProducts size={size} />
        </div>
        <div class="col-2">
          <Cart size={size} />
        </div>
      </div>
    </div>
  );
}

export default MainPage