import { use, useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userAction";
import { asyncLoadProduct } from "./store/actions/productAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProduct());
  }, []);
  
  return (
    <div className="h-screen bg-blue-400 text-2xl">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
