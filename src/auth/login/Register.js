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
//const cachedData = storage.getItem('todoappUserData');

    const navigate = useNavigate();

    const handleUserName = (e) => {
        setUsername(e.target.value);
        //send id data to FirebaseError.js
        
        //setAccount(getAccount);
      
    }

    const handleContact = (e) => {
        setContact(e.target.value);
    }

   const handleSubmit = (e) => {
  	e.preventDefault();

    if (username !== '' && email !== '' && password !== '') {
       const userData = {
         username,
         email,
         password,
       };

    try {
      storage.setItem("todoappUserData", JSON.stringify(userData));

	setTimeout(()=> {
          navigate("/");
	}, 1000)
     } catch (err) {
      alert("Something went wrong, please try again");
      console.log("Failed to save user data");
    }
    setUsername("");
    setPassword("");
    setEmail("");
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
          onChange={handleUserName}
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
{/*
        <label htmlFor="file"></label>
        <input className="send-file" 
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "display" }} />
*/}
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
