import useLogin from "../hooks/useLogin";


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

        {isLogged ? (
        <strong>Witaj, {localStorage.getItem("user")}</strong>
      ) : (
          <form style={({display: 'inline-block'})}>
            <input type="text" placeholder="Login" value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Hasło" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            
        </form>
      )}
      <button style={({display: 'inline-block'})}type="submit" onClick={handleSubmit}>
              {isLogged ? "Wyloguj" : "Zaloguj"}
              </button>
        </>
  );
};

export default Login;
