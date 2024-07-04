import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

interface PrivateRoutesProps {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  if (user) {
    return <>{children}</>;
  } 

  return <Navigate to="/" state={{ from: location, message: "Please fill out the form first." }} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
