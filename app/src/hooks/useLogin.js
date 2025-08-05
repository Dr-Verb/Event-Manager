import { useState, useContext } from "react";
import { LoginContext } from "../context";
import { LOCAL_URL } from "../services/links";

const useLogin = () => {
  const [username, setUsername] = useState("a"); //wartośc domyśłna tylko do testów usunąć
  const [password, setPassword] = useState("a"); //wartośc domyśłna tylko do testów usunąć
  const { isLogged, logIn, logOut } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogged) {
      const url = `${LOCAL_URL}/users?username=${username}&password=${password}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {

          localStorage.setItem("user", username);
          logIn();
          setPassword("");
          setUsername("");
        } else {
          logOut();
        }
      } catch (err) {
        console.error(err);
        logOut();
      }
    } else {
      logOut();
      setPassword("");
      setUsername("");
    }
  };

  return {
    handleSubmit,
    setUsername,
    setPassword,
    username,
    password,
    isLogged,
  };
};

export default useLogin;
