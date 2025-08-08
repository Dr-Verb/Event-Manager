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
        <strong>Witaj, {localStorage.getItem("user")} </strong>
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
          {!isLogged && (<button style={({display: 'inline-block'})}type="submit" onClick={()=> 0/*handleRegister*/}>Rejestracja</button>) //handle do poprawy raczej przejście do strony rejestracji  
          }
          <br/>
        </>
  );
};

export default Login;
