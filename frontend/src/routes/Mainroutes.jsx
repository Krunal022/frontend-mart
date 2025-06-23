import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Mainroutes;
