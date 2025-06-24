import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../store/actions/productAction";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CreateProductHandler = (product) => {
    console.log("Product Data Submitted:", product);
    product.id = nanoid();

    dispatch(asyncCreateProduct(product));
    navigate("/products");
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-white text-2xl font-medium text-center mb-6">
          Create Product
        </h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(CreateProductHandler)}
        >
          <div>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              placeholder="Product Title"
              className="p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
            />
            {errors.title && (
              <p className="text-red-400 text-xs mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("price", { required: "Price is required" })}
              type="number"
              placeholder="Price"
              className="p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
            />
            {errors.price && (
              <p className="text-red-400 text-xs mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("image", { required: "Image URL is required" })}
              type="text"
              placeholder="Image URL"
              className="p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
            />
            {errors.image && (
              <p className="text-red-400 text-xs mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Description"
              className="p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
              rows={4}
            />
            {errors.description && (
              <p className="text-red-400 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <section className="flex items-center gap-2 mb-4">
              <label className="text-white text-sm">Select Product Type:</label>
              <select
                {...register("type", { required: "Product type is required" })}
                className="p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="books">Books</option>
                <option value="others">Others</option>
              </select>
            </section>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded p-3 transition"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
