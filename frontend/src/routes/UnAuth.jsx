import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnAuth = ({ children }) => {
  const user = useSelector((state) => state.userReducer.users);

  return !user ? children : <Navigate to="/" />;
};

export default UnAuth;
