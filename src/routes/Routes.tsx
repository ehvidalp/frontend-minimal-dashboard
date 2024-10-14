import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../features/authentication/pages/LoginPage';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path="/login" element={<LoginPage />} />
    <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;