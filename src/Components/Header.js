import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Context/CartContext";
import Cart from "./Cart";


function Header() {
    const { cartItems } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="products">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="brands">Marcas</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" to="order/300/product/5">Orden</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="productsbrand?filter=algo&orderBy=nombre&brand=nueva">Product Brand</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="logueado">Logueado</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="rutaprogramada">Ruta porogramada</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="form">Formulario</Link>
                        </li> */}
                    </ul>
                </div>
                {
                    cartItems.length
                        ? (
                            <Link className="nav-link active" to="cart">
                                <Cart />
                            </Link>
                        )
                        : <></>
                }
            </div>

        </nav>
    );
}
export default Header;