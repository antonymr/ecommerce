import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const onLogin = (user) => {
    //TODO: Validar usuario.... (Rest API)
    setUser(user);

    //Home
    //navigate("/");
    //Back
    navigate(-1);
  };

  const onLogout = () => {
    setUser(null);

    //Home
    navigate("/");
  };

  const value = {
    user: user,
    onLogin: onLogin,
    onLogout: onLogout,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export default UserContext;