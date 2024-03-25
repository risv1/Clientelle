import { User } from "@/models/users";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react"; // Corrected import

interface AuthContextType {
  user: User | null;
  updateUser: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  updateUser: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => { 
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, logout }}>
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
}



