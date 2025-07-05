import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userAction";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../api/axiosconfig";

const Products = () => {
  const user = useSelector((state) => state.userReducer.users);
  const [products, setproducts] = useState([]);
  const [hasmore, sethasmore] = useState(true);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    if (!user || !product) return;

    const copyUser = { ...user, cart: [...(user.cart || [])] };
    const x = copyUser.cart.findIndex((c) => c?.product?.id === product.id);

    if (x === -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[x] = {
        product,
        quantity: copyUser.cart[x].quantity + 1,
      };
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const fetchProducts = async () => {
    try {
      const start = products.length; // always get fresh length
      const { data } = await axios.get(`/products?_limit=4&_start=${start}`);

      if (data.length === 0) {
        sethasmore(false);
      } else {
        setproducts((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.log(error);
      sethasmore(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // call only once on mount
  }, []);

  const renderProducts = products.map((product) => (
    <div
      key={product.id}
      className="bg-gray-800 p-3 sm:p-4 rounded-xl shadow-md hover:scale-105 transition flex flex-col"
    >
      <img
        className="w-full h-32 sm:h-40 object-contain mb-2 rounded bg-white p-2"
        src={product.image}
        alt={product.title}
      />
      <h2 className="text-xs sm:text-sm font-medium text-white mb-1 text-center">
        {product.title}
      </h2>
      <p className="text-blue-400 font-semibold text-center text-xs sm:text-sm">
        ₹ {product.price}
      </p>
      <p className="text-gray-400 text-[10px] sm:text-xs mt-2 line-clamp-3 text-center">
        {product.description}
      </p>

      <div className="flex flex-col sm:flex-row justify-between gap-2 mt-3">
        <button
          onClick={() => addToCartHandler(product)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-2 rounded-full transition w-full"
        >
          Add to Cart
        </button>
        <Link
          to={`/product-detail/${product.id}`}
          className="bg-gray-700 hover:bg-gray-600 text-white text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-2 rounded-full transition w-full text-center"
        >
          More Info
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6">
        Products
      </h1>

      {products.length > 0 ? (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchProducts}
          hasMore={hasmore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" , fontSize:"1rem" , fontWeight:'200', margin:'2rem 0' }}>
              <b>Yay! You have seen it all.</b>
            </p>
          }
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {renderProducts}
          </div>
        </InfiniteScroll>
      ) : (
        "Loading.."
      )}
    </div>
  );
};

export default Products;
