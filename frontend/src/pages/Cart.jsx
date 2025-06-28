import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Your Cart</h1>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <p className="text-gray-400 text-center md:text-xl">Your cart is currently empty 🛒</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
