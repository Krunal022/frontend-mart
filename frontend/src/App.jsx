import { use, useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, []);
  return (
    <div className="text-2xl font-bold text-green-500">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
