import React from "react";
import { asyncUpdateUser } from "../store/actions/userAction";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductTemplet = ({ product }) => {
  const user = useSelector((state) => state.userReducer.users);
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

  return (
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
  );
};

export default ProductTemplet;
