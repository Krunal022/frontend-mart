import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const user = useSelector((state) => state.userReducer.users);

  return user ? children : <Navigate to="/login" />;
};

export default AuthWrapper;
