import { createContext,  useReducer } from "react";

export const CartContext = createContext();


export const cartReducer = (state, action) => {
  
  switch (action.type) {
    
    case "ADD":
      return {
        ...state,
        cart: [
          ...state.cart.filter((val) => val.id !== action.payload),
          action.payload,
        ]
      };
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter(val => {
          if (val.id !== action.payload) {
            return val
          }
        }),
      }
    case 'DECREMENT':
      const indexToRemove = state.cart.findIndex(item => item.id === action.payload);
      console.log("indexToRemove", indexToRemove);
        if (indexToRemove !== -1) {
          state.cart.splice(indexToRemove,1);
      }
     
      return {
        ...state
      }
    
    default:
      return state
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
