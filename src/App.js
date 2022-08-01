import React from "react";
import RoutesEcommerce from "./Components/Routes/RoutesEcommerce";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartProvider } from "./Components/Context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <RoutesEcommerce />
      </CartProvider>
    </div>
  );
}

export default App;
