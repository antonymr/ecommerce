import React, { useContext } from "react";
import CartContext from "./Context/CartContext";

function CartList() {
    const { cartItems, dispatch } = useContext(CartContext);

    const onAddItem = (item) => {
        dispatch({ type: 'add', product: item });
    }

    const onDeleteItem = (item) => {
        dispatch({ type: 'delete', product: item });
    }

    const onRemoveItem = (item) => {
        if (item.cantidad > 1)
            dispatch({ type: 'remove', product: item });
    }

    const onRemoveAllItems = () => {
        dispatch({ type: 'removeAll' });
    }

    const items = cartItems.map(item =>
        <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>
                <button onClick={() => onRemoveItem(item)} type="button" className="btn btn-danger mx-2">
                    <i className="bi bi-dash-lg"></i>
                </button>
                {item.cantidad}
                <button onClick={() => onAddItem(item)} type="button" className="btn btn-success mx-2">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </td>
            <td>{item.precio}</td>
            <td>Total</td>
            <td><button type="button" className="btn btn-danger" onClick={() => onDeleteItem(item)}>Eliminar</button></td>
        </tr>
    )

    return (
        <div className="p-5">
            <h3>Lista de productos en la cesta</h3>
            {cartItems.length ?
                <button onClick={() => onRemoveAllItems()} type="button" className="btn btn-danger">
                    Eliminar Carrito
                </button> : <></>
            }
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    );
}
export default CartList;