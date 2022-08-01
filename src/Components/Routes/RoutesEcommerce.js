import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "../CartList";
import Layout from "../Layout";
import NoEncontrado from "../NoEncontrado";
import Products from "../Products";
import Brand from "../Brand";
import OrdenProduct from "../OrdenProduct";
import ProductBrand from "../ProductBrand";
import RutasProgramadas from "../RutasProgramadas";
import RoutePrivate from "../Routes/RoutePrivate";
import Login from "../Login";
import Logeado from "../Logeado";
import FromReact from "../FormReact";

function RoutesEcommerce() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Products />}></Route>
                    <Route path="products" element={<Products />}></Route>
                    <Route path="cart" element={<CartList />}></Route>
                    <Route path="brands" element={<Brand />}></Route>
                    <Route path="order/:orderId/product/:productId" element={<OrdenProduct />}></Route>
                    <Route path="productsbrand" element={<ProductBrand />}></Route>
                    <Route path="rutaprogramada" element={<RutasProgramadas />}></Route>

                    <Route path="logueado" element={
                        <RoutePrivate>
                            <Logeado />
                        </RoutePrivate>
                    }></Route>

                    <Route path="form" element={<FromReact />}></Route>

                    <Route path="*" element={<NoEncontrado />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesEcommerce;