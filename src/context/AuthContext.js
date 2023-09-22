import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    setToken(userToken);
    return userToken;
  };
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };
  const saveToken = (user, token) => {
    console.log(user);
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setToken("");
    setUser("");
  };
  return (
    <AuthContext.Provider
      value={{ setToken, saveToken, logout, token, user, getToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

// const login = (data) => {
//   console.log("auth data", data);
//   setAuthData(data);
//   setConfig({
//     headers: {
//       Authorization: `${data?.tokenType} ${data?.accessToken}`,
//       "Content-Type": "application/json",
//     },
//   });
//   sessionStorage.setItem("token", `${data?.tokenType} ${data?.accessToken}`);
//   getUserData(data.username)
//     .then((response) => {
//       console.log("user data", response.data);
//       setUserData(response.data);
//       sessionStorage.setItem("userData", response.data);
//     })
//     .catch((error) => console.log(error));
// };

// const logout = () => {
//   setConfig({
//     headers: {
//       Authorization: "",
//     },
//   });
//   setAuthData(null);
// };
