import { useDispatch, useSelector } from "react-redux";
import { asyncgetusers } from "./store/userAction"; // Adjust the path as necessary
import { useEffect } from "react";

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return <div className="text-2xl font-bold text-green-500">APP</div>;
};

export default App;
