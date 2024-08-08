import { createContext, FC, ReactNode, useContext } from "react";
import { useMutation, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import serverApi from "../api/baseUrl";

// Create a QueryClient
const queryClient = new QueryClient();

interface AuthContextType {
  token: string | null;
  login: (data: { usernameOrEmail: string; password: string }) => void;
  logout: () => void;
  registerUser: (data: {
    usernameOrEmail: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderType {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [token, setToken] = useLocalStorage<string | null>("AccessToken", null);
  const navigate = useNavigate();

  const login = async (data: { usernameOrEmail: string; password: string }) => {
    const response = await serverApi.post("/api/login", data);
    return response.data;
  };
  const registerUser = async (data: {
    usernameOrEmail: string;
    password: string;
    confirmPassword: string;
  }) => {
    const response = await serverApi.post("/api/register", data);
    return response.data;
  };

  const logout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Wrap your App component with QueryClientProvider and AuthProvider
const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
