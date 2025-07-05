import { use, useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userAction";
import { asyncLoadProduct } from "./store/actions/productAction";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  // console.log(products);
  useEffect(() => {
    if (!user) {
      dispatch(asyncCurrentUser());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(asyncLoadProduct());
    }
  }, [dispatch, products]);

  return (
    <div className="h-screen bg-blue-400 text-2xl">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
