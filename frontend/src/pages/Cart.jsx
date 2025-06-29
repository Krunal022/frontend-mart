import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userAction";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const cartItems = user?.cart || [];

  const IncreaseQuantity = (index) => {
    const copyUser = { ...user, cart: [...user.cart] };
    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantity: copyUser.cart[index].quantity + 1,
    };
    dispatch(asyncUpdateUser(user.id, copyUser));
  };

  const DecreaseQuantity = (index) => {
    const copyUser = { ...user, cart: [...user.cart] };

    if (copyUser.cart[index].quantity === 1) {
      copyUser.cart.splice(index, 1);
    } else {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1,
      };
    }
    dispatch(asyncUpdateUser(user.id, copyUser));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
            <p className="text-gray-400 md:text-xl">
              Your cart is currently empty 🛒
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) =>
              item?.product ? (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-20 h-20 object-contain bg-white rounded p-2"
                  />
                  <div className="flex-1">
                    <h2 className="text-white font-medium text-sm">
                      {item.product.title}
                    </h2>

                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => DecreaseQuantity(index)}
                        className="px-2 py-1 text-sm bg-gray-700 rounded hover:bg-gray-600"
                      >
                        −
                      </button>
                      <span className="text-white text-sm">{item.quantity}</span>
                      <button
                        onClick={() => IncreaseQuantity(index)}
                        className="px-2 py-1 text-sm bg-gray-700 rounded hover:bg-gray-600"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-blue-400 text-sm font-semibold mt-1">
                      ₹{item.product.price}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
