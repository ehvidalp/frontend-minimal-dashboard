import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../features/authentication/pages/LoginPage';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<LoginPage />} />
    </Route>
    <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;