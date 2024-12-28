import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const userData = {
  email: "trevor279@live.com",
  password: "password",
}

const Login=()=> {
 const [error, setError] = useState(false);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [userData, setUserData] = useState(()=> 
{
  const catchedData = localStorage.getItem("todoappUserData");
    return catchedData ? JSON.parse(catchedData) : [];
  
});
    const [logText, setLogText] = useState(0);

  const navigate = useNavigate();

  useEffect(()=> {
/*
    const storage = window.localStorage;
    const cachedData = storage.getItem('todoappUserData');
    setUserData(cachedData);	
*/
alert(JSON.stringify(userData));

    if(userData.length > 0) {
 //const parsedData = JSON.parse(cachedData);
// alert(JSON.stringify(parsedData));
      if(userData.email) {
        navigate("/dashboard");
       }
     }
  }, [navigate]);

//const {dispatch} = useContext(AuthContext);

    const handleSubmit=(e)=> {
	    e.preventDefault();
      if(email === userData?.email && password === userData?.password) {
	      alert(email)
	      navigate("/dashboard");
	    } else {
	        alert(userData.email)
	        alert(password)
          alert(`wrong username or password,
please press register button if not registered`);
	}
    }

    return (
        <div>
    <div className='login-container'>
      <div className='login'> 
        <form className='login-form' onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
<input type='submit' value='Login'  className='login-button'/>
{error && <span style={{color: "red"}}>Wrong email or password!</span>}
<ul>
<li>Cilck <Link to="/registeruser" >here</Link> to register</li>
</ul>

      </form>
      </div>
    <div className="login-info">
    <h5 style={{ fontWeight: "600" }}>TEN GLOBAL MONEY</h5>
        <p style={{ marginTop: '50px' }}>Safe Cash Send</p>
        <p>Quick Process</p>
    </div>
    </div>
        </div>
    )
}

export default Login;
