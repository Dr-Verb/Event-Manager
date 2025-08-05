// import { FormControl } from "@mui/material";

import useLogin from "../hooks/useLogin";
// import { StyledButton, StyledInput, Wrapper } from "../shared";

const Login = () => {
  const {
    handleSubmit,
    setUsername,
    setPassword,
    username,
    password,
    isLogged,
  } = useLogin();

  return (
    
        <>
        {console.log(isLogged)}
        {isLogged ? (
        <div>Welcome, {localStorage.getItem("user")}</div>
      ) : (
          <form>
            <input type="text" placeholder="Login" value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Hasło" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            
        </form>
      )}
      <button type="submit" onClick={handleSubmit}>
              {isLogged ? "Logout" : "Login"}
              </button>
        </>
  );
};

export default Login;
