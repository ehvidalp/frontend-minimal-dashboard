import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated', isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;