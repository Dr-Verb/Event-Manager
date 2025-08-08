import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext(false);

const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [invest, setInvest] = useState([]);
  const [selectedInvest, setSelectedInvest] = useState('');
  const navigate = useNavigate();

  const logIn = () => {
    localStorage.setItem("userIsLoggedIn", true);
    setIsLogged(true);
  };
  const logOut = () => {
    localStorage.removeItem("userIsLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("userLVL");
    localStorage.removeItem("invest");
    setIsLogged(false);
    navigate("/");
  };


  useEffect(() => {
    if (isLogged === false) {
      navigate("/");
    }
  }, [isLogged, navigate]);

   useEffect(() => {
    if (localStorage.getItem("userIsLoggedIn") === "true") setIsLogged(true);
  }, []);



  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged, logIn, logOut, invest, setInvest, selectedInvest, setSelectedInvest}}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };
