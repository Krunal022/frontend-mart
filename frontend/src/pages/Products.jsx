import { lazy, Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../api/axiosconfig";
const ProductTemplet = lazy(() => import("../components/ProductTemplet"));

const Products = () => {
  const [products, setproducts] = useState([]);
  const [hasmore, sethasmore] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-center mb-6">
        Products
      </h1>

      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasmore}
        loader={
          <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <span className="ml-3 text-blue-400 text-sm tracking-wide animate-pulse">
              Loading products...
            </span>
          </div>
        }
        endMessage={
          <p className="text-center text-gray-400 text-sm mt-10">
            🎉 <b>Yay! You have seen it all.</b>
          </p>
        }
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Suspense
              key={product.id}
              fallback={
                <div className="animate-pulse flex flex-col items-center justify-center bg-gray-800 p-4 rounded-xl shadow-md">
                  <div className="bg-gray-700 h-32 w-full mb-3 rounded-md"></div>
                  <div className="bg-gray-700 h-4 w-3/4 mb-2 rounded"></div>
                  <div className="bg-gray-700 h-3 w-1/2 mb-1 rounded"></div>
                  <div className="bg-gray-700 h-3 w-2/3 rounded"></div>
                  <div className="flex gap-2 mt-4 w-full">
                    <div className="h-8 flex-1 bg-gray-700 rounded-full"></div>
                    <div className="h-8 flex-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              }
            >
              <ProductTemplet key={product.id} product={product} />
            </Suspense>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
