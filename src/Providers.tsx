import { ReactNode } from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <AuthProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </AuthProvider>
);

export default Providers;