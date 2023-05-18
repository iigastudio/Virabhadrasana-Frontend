import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("loading");
  const login = (user) => {
    setUser(user);

    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <AppContext.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {user == "loading" ? <p>Loading</p> : children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
