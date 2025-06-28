import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../admin/CreateProduct";
import UpdateProduct from "../admin/UpdateProduct";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import UserProfile from "../pages/UserProfile";
import PageNotFound from "../PageNotFound";
import AuthWrapper from "./AuthWrapper";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Product />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/product-detail/:id"
        element={
          <AuthWrapper>
            {" "}
            <ProductDetail />
          </AuthWrapper>
        }
      />
      <Route
        path="admin/create-product"
        element={
          <AuthWrapper>
            {" "}
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="admin/update-product/:id"
        element={
          <AuthWrapper>
            {" "}
            <UpdateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart-product"
        element={
          <AuthWrapper>
            {" "}
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="/admin/user-profile" element={<UserProfile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
