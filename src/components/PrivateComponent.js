import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
const PrivateComponent = ({ children }) => {
  const auth = getAuth();
  return auth.currentUser ? children : <Navigate to="/login" />;
};
export default PrivateComponent;
