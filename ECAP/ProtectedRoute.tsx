import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('ecap_token');
  const rollNumber = localStorage.getItem('ecap_rollNumber');
  const userName = localStorage.getItem('ecap_userName');
  const userType = localStorage.getItem('ecap_userType');

  // Check if user is authenticated
  if (!token) {
    return <Navigate to="/ecap/login" replace />;
  }

  // For employees, check userName; for students/parents, check rollNumber
  if (userType === 'employee') {
    if (!userName) {
      return <Navigate to="/ecap/login" replace />;
    }
  } else {
    if (!rollNumber) {
      return <Navigate to="/ecap/login" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;

