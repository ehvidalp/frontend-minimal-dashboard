import React, { createContext, useContext, useState, useEffect } from 'react';
// import { DashboardData } from '../features/dashboard/interfaces/dashboardInterfaces'; // Import interfaces if needed
// import authService from '../features/authentication/services/authService'; // Import the authService to handle login/logout

// Define an interface for the AuthContext
interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Define a User interface for the type of user data
interface User {
  id: number;
  name: string;
  email: string;
}

// Create the AuthContext with a default value
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if a user is already logged in, for example by checking localStorage or an API call
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
    //   const loggedInUser = await authService.login({ email, password });
    //   setUser(loggedInUser);
        console.log(email, password)
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify('loggedInUser'));
    } catch (error) {
      console.error('Login failed', error);
      throw error; // Optionally handle error more gracefully
    }
  };

  const logout = () => {
    // authService.logout();
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
