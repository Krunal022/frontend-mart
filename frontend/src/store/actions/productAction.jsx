import { Flip, toast } from "react-toastify";
import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/productSlice";

export const asyncLoadProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    console.log(data);
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncLoadProduct());
  } catch (error) {
    console.log(error);
  }
};
export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncLoadProduct());
    toast.error("Product Deleted!!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    }); 
  } catch (error) {
    console.log(error);
  }
};
export const asyncUpdateProduct =
  (id, product) => async (dispatch, getState) => {
    try {
      await axios.patch(`/products/${id}`, product);
      dispatch(asyncLoadProduct());
      toast.success("Product Updated!", {
        position: "top-right",
        autoClose: 1000,
        transition: Flip,
      });
    } catch (error) {
      console.log(error);
    }
  };
