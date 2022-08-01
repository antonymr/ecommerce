import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function OrdenProduct() {
    const { productId, orderId } = useParams();
    const navigation = useNavigate();

    return (
        <>
            <p>Orden: {orderId}</p>
            <p>Producto: {productId}</p>
            <button onClick={() => navigation(-1)}>Regresaar</button>
        </>
    );
}

export default OrdenProduct;