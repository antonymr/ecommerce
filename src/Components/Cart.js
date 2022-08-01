import React, { useContext } from "react";
import CartContext from "./Context/CartContext";


function Cart() {
    const { cartItems } = useContext(CartContext);

    return (
        <button className="btn btn-success d-flex" type="button">
            <i className="bi bi-basket" />
            <div> {cartItems.length}</div>
        </button>
    );
}
export default Cart;