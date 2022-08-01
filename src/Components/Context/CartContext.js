import React, { useReducer } from "react";

const CartContext = React.createContext();

function cartReducer(cartItems, action) {
  const product = action.product;
  var productExist = null;
  switch (action.type) {
    case 'add':
      productExist = cartItems.find((p) => p.id === product.id);
      if (productExist) {
        let cartItemUpdate = cartItems.map((item) =>
          item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
        return cartItemUpdate;
      } else {
        let productExist = {
          id: product.id,
          nombre: product.title,
          precio: product.price,
          cantidad: 1,
        };
        return [...cartItems, productExist];
      }
    case 'remove':
      productExist = cartItems.find((p) => p.id === product.id);
      if (productExist && productExist.cantidad > 1) {
        let cartItemUpdate = cartItems.map((item) =>
          item.id === product.id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        return cartItemUpdate;
      } else {
        const cartItemsNew = cartItems.filter((p) => p.id !== product.id);
        return cartItemsNew;
      }
    case 'delete':
      const cartItemsNew = cartItems.filter((p) => p.id !== product.id);
      return cartItemsNew;
    case 'removeAll':
      return [];
    default:
      return cartItems;
  }
}

export function CartProvider(props) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const value = {
    cartItems: cartItems,
    dispatch: dispatch
  }

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;