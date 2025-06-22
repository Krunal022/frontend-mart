import axios from "./api/Axiosconfig"; // Adjust the path as necessary
import { useEffect } from "react";

const App = () => {
  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return <div className="text-2xl font-bold text-green-500">APP</div>;
};

export default App;
