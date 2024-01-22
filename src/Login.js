import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = (props) => {
 const navigate = useNavigate();
 const [user, setUser] = useState(null);
 const [data, setData] = useState({
    email: "",
    password: "",
 });

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
 };

 useEffect(() => {
 }, [setData]);

 const handleLogin = () => {
    if (data.email === "kh@gmail.com" && data.password === "password")
     {setUser(true);
      navigate("/book")}
    else setUser(false);
 };

 return (
  <div className={`login-container ${props.darkMode ? "dark" : "light"}`}>
    <div><h1 className="login-text">Welcome to B-Library</h1>
    </div>
    <form className="login-form">
      <h2 className="login-text">Email: </h2>
      <input className="input"
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleInputChange}
      />
      <h2 className="login-text">Password: </h2>
      <input className="input"
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleInputChange}
      />
      {user === false &&
      (
        <div className="login-text"> Incorrect Email or Password </div> 
      )}
      <div className="button-container">
      <button type="submit" onClick={handleLogin} className="search-button">
        Login
      </button>
      </div>  
      
    </form>
    
    </div>
 );
};
export default Login;