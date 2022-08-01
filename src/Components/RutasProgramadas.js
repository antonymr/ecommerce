import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RutasProgramadas() {

    const [orderId, setOrderId] = useState(0);
    const [productId, setProductId] = useState(0);
    const navegation = useNavigate();

    const handleChangeOrder = (event) => {
        setOrderId(event.target.value);
    }

    const handleChangeProduct = (event) => {
        event.preventDefault();
        setProductId(event.target.value);
    }

    return (
        <>
            <form>
                Orden: <input type="number" value={orderId} onChange={handleChangeOrder} />
                Producto: <input type="number" value={productId} onChange={handleChangeProduct} />
                <button onClick={() => navegation(`/order/${orderId}/product/${productId}`)}>boton</button>
            </form>
        </>
    );
}

export default RutasProgramadas;