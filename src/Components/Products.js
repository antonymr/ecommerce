import React, { useState, useEffect, useContext } from "react";
import CartContext from "./Context/CartContext";

function Products() {
    const [products, setProducts] = useState([]);

    const { dispatch } = useContext(CartContext);

    const imgStyle = {
        maxWidth: "200px",
        maxHeight: "250px"
    }

    useEffect(() => {
        const url = `https://fakestoreapi.com/products`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const onAddProduct = (product) => {
        dispatch({ type: 'add', product: product });
    }

    const items = products.map((product) => (
        <div className="col" key={product.id} >
            <div className="card h-100">
                <img src={product.image} className="card-img-top mx-auto d-block" style={imgStyle} alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary mx-auto d-block" type="button" onClick={() => onAddProduct(product)}>Agregar al carrito</button>
                </div>

            </div>
        </div>
    ));
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 p-5" >
            {items}
        </div>
    );
}

export default Products;