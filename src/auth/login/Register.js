import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    
    // Save to localStorage
    localStorage.setItem('todoappUserData', JSON.stringify(newUser));
    
    // Ensure persistence and navigate
    setTimeout(() => {
      navigate('/login'); 
      //<Navigate to="/login" />
    }, 500); // Add a small delay to ensure `localStorage` is updated
  };

  return (
    <div>
	    <h1 className="register-heading">
        <span>Register</span>
      </h1>
      <div className="login-container">
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" 
              placeholder="Username" 
              onChange={(e) => setUsername(e.target.value)} 
              className="login-input"
	            required/>
            <input type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="login-input"
	          required/>
            <input type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            className="login-input"
	          required/>
            <button type="submit" 
            className="login-button">Register</button>


          <p>Already have an account</p>
              <ul>
                <li>
                  Click <Link to="/login">here</Link> to Login
                </li>
              </ul>
          </form>
        </div>
        
        <div className="login-info">
            <h5 style={{ fontWeight: "600" }}>TEN GLOBAL MONEY</h5>
            <p style={{ marginTop: "50px" }}>Safe Cash Send</p>
            <p>Quick Process</p>
          </div>

      </div>
    </div>
  );
};

export default Register;

/*
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (username !== "" && email !== "" && password !== "") {
      const userData = {
        username,
        email,
        password, // Note: Consider hashing the password for security
      };

      try {
        // Save user data to localStorage
        localStorage.setItem("todoappUserData", JSON.stringify(userData));

        // Delay navigation to allow localStorage to persist
        setTimeout(() => {
          navigate("/login");
        }, 100);
      } catch (err) {
        alert("Something went wrong, please try again");
        console.error("Failed to save user data:", err);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      <div>
        <h1 className="register-heading">
          <span>Register</span>
        </h1>
        <div className="login-container">
          <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
              <input type="submit" value="Register" className="login-button" />

              <p>Already have an account</p>
              <ul>
                <li>
                  Click <Link to="/login">here</Link> to Login
                </li>
              </ul>
            </form>
          </div>
          <div className="login-info">
            <h5 style={{ fontWeight: "600" }}>TEN GLOBAL MONEY</h5>
            <p style={{ marginTop: "50px" }}>Safe Cash Send</p>
            <p>Quick Process</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
*/


/*
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterUser() {

  const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    const [contact, setContact] = useState(0);
    const [account, setAccount] = useState();

const storage = window.localStorage; 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (username !== "" && email !== "" && password !== "") {
        const userData = {
          username,
          email,
          password, // Optional: Hash passwords for better security.
        };
    
        try {
          localStorage.setItem("todoappUserData", JSON.stringify(userData));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } catch (err) {
          alert("Something went wrong, please try again");
          console.log("Failed to save user data");
        }
      } else {
        alert("Please fill in all fields");
      }
    };
    


   return(
        <div>
            <div> 
            <h1 className="register-heading"><span>Register</span></h1>
    <div className='login-container'>

      <div className='login'> 
        <form className='login-form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
	  required
        />

<input 
  type="email" 
  placeholder="Email" 
  onChange={(e) => setEmail(e.target.value)} 
  className="login-input"
  required 
/>

<input 
  type="password" 
  placeholder="Password" 
  onChange={(e) => setPassword(e.target.value)} 
  className="login-input"
  required 
/>
    <input type='submit' value='Register' className='login-button' />

<p>Already have an account</p>
<ul>
<li>Cilck <Link to="/login" >here</Link> to Login</li>
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
        </div>
    )
}

export default RegisterUser;
*/
