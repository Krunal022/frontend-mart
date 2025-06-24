import React from "react";
import { useSelector } from "react-redux";

const products = [
  {
    id: "1",
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Perfect pack for everyday use and walks.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  
];

const Products = () => {
  const products = useSelector((state) => state.productsReducer);
  console.log(products);
  return (
    <h1>l</h1>
    // <div className="min-h-screen bg-gray-900 p-6">
    //   <h1 className="text-2xl text-white font-medium mb-6 text-center">
    //     Products
    //   </h1>

    //   <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-3">
    //     {products.map((product) => (
    //       <div
    //         key={product.id}
    //         className="bg-gray-800 rounded-lg shadow-md p-3 flex flex-col items-center"
    //       >
    //         <img
    //           src={product.image}
    //           alt={product.title}
    //           className="w-full h-36 object-contain mb-3 bg-white rounded"
    //         />
    //         <h2 className="text-white text-sm font-medium text-center">
    //           {product.title}
    //         </h2>
    //         <p className="text-gray-400 text-xs mt-1">{product.category}</p>
    //         <p className="text-blue-400 font-semibold text-sm mt-1">
    //           ${product.price}
    //         </p>
    //         <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded transition">
    //           Add to Cart
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Products;
