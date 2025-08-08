import { useState, useContext } from "react";
import { LoginContext } from "../context";
import { LOCAL_URL } from "../services/links";

const useLogin = () => {
  const [username, setUsername] = useState("a"); //wartośc domyśłna tylko do testów usunąć
  const [password, setPassword] = useState("a"); //wartośc domyśłna tylko do testów usunąć
  const { isLogged, logIn, logOut, setInvest, invest, setSelectedInvest, selectedInvest} = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogged) {
      const url = `${LOCAL_URL}/users?username=${username}&password=${password}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
      
          localStorage.setItem("user", username);
          localStorage.setItem("userLVL", data[0].usrlvl);
          localStorage.setItem("invest", [...data[0].invest]);
          setInvest([...data[0].invest,'UND']);
          //setSelectedInvest(invest[0]);
         // console.log(invest);
          //console.log(selectedInvest);
          

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
