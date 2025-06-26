import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../admin/CreateProduct";
import UpdateProduct from "../admin/UpdateProduct";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="admin/create-product" element={<CreateProduct />} />
      <Route path="admin/update-product/:id" element={<UpdateProduct />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/cart-product" element={<Cart />} />
    </Routes>
  );
};

export default Mainroutes;
