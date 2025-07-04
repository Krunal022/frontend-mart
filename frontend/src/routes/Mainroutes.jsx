import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import UnAuth from "./UnAuth";
import { useSelector } from "react-redux";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../admin/CreateProduct"));
const UpdateProduct = lazy(() => import("../admin/UpdateProduct"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const PageNotFound = lazy(() => import("../PageNotFound"));
const Auth = lazy(() => import("./Auth"));

const Mainroutes = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />

      <Route
        path="/login"
        element={
          <UnAuth>
            <Login />
          </UnAuth>
        }
      />
      <Route
        path="/register"
        element={
          <UnAuth>
            <Register />
          </UnAuth>
        }
      />

      <Route
        path="/product-detail/:id"
        element={
          <Auth>
            <ProductDetail />
          </Auth>
        }
      />

      <Route
        path="/admin/create-product"
        element={
          <Auth>
            {user?.isAdmin ? <CreateProduct /> : <Navigate to="/" />}
          </Auth>
        }
      />
      <Route
        path="/admin/update-product/:id"
        element={
          <Auth>
            {user?.isAdmin ? <UpdateProduct /> : <Navigate to="/" />}
          </Auth>
        }
      />

      <Route
        path="/cart-product"
        element={
          <Auth>
            <Cart />
          </Auth>
        }
      />

      <Route path="/admin/user-profile" element={<UserProfile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
