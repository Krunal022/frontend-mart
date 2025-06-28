import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../store/actions/productAction";
import { useForm } from "react-hook-form";
import { loadproduct } from "../store/reducers/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productsReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  //   console.log(user);
  const product = products.find((p) => p.id === id || p.id === Number(id));
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      type: product?.type,
      description: product?.description,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const DeleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };
  const UpdateProductHandler = (updatedProduct) => {
    dispatch(asyncUpdateProduct(product.id, updatedProduct));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-10">
      {/* Main Product Display */}
      <div className="flex flex-col md:flex-row gap-10 bg-gray-800 rounded-xl p-6 shadow-xl">
        {/* Image */}
        <div className="flex-1 bg-white rounded-lg p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-yellow-400 text-sm">★★★★★ [1 customer review]</p>
          <p className="text-red-400 text-lg font-bold">₹ {product.price}</p>
          <p className="text-gray-300 text-sm">{product.description}</p>

          {/* Quantity and Actions */}
          <div className="flex gap-4 mt-4 items-center">
            <input
              type="number"
              value={1}
              readOnly
              className="w-16 p-2 text-center bg-gray-700 border border-gray-600 rounded text-white text-sm"
            />
            <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition text-sm">
              ADD TO CART
            </button>
          </div>

          {/* Wishlist / Compare */}
          <div className="flex gap-6 mt-3 text-xs text-gray-400">
            <p>❤️ Browse Wishlist</p>
            <p>🔁 Add to Compare</p>
          </div>

          <div className="mt-3 text-xs text-gray-500 space-y-1">
            <p>
              Categories:{" "}
              <span className="text-white">{product.type}</span>
            </p>
            <p>
              Tag: <span className="text-white">👋🏻</span>
            </p>
          </div>
        </div>
      </div>

      {/* Update Form */}
      {user?.isAdmin && (
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-4">
            Update Product
          </h2>
          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="space-y-4"
          >
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              placeholder="Product Title"
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
            />
            <input
              {...register("price", { required: "Price is required" })}
              type="number"
              placeholder="Price"
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
            />
            <input
              {...register("image", { required: "Image URL is required" })}
              type="text"
              placeholder="Image URL"
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
            />
            <textarea
              rows={3}
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Description"
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
            />

            <select
              {...register("type", {
                required: "Product type is required",
              })}
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
            >
              <option value="">Select Product Type</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="books">Books</option>
              <option value="others">Others</option>
            </select>

            <div className="flex gap-4 pt-3">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm rounded w-full">
                Update
              </button>
              <button
                onClick={DeleteHandler}
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded w-full"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
