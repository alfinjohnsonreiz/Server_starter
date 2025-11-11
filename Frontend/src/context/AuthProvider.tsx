import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type User = {
  id: string;
  name: string;
  role: string;
};
type AuthContextType = {
  user: User | null | string;
  setUser: React.Dispatch<React.SetStateAction<User | string | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      const storedUser = JSON.parse(stored);
      setUser(storedUser);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
