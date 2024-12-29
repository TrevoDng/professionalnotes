import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null); // Initialize with null for better checks
  const navigate = useNavigate();

  useEffect(() => {
    const cachedData = localStorage.getItem("todoappUserData");
    if (cachedData) {
      const parsedData = JSON.parse(cachedData); // Parse data correctly
      setData(parsedData); // Set parsed data
    } else {
      navigate("/login"); // Redirect to login if no data is found
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.removeItem("todoappUserData"); // Clear user data
    setData(null); // Clear local state
    navigate("/login"); // Redirect to login
  };

  if (!data) {
    return <div>Loading...</div>; // Show a loading state if data is not available
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <h3>Hello, {data.username || "User"}</h3>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Dashboard;


/*
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

const Dashboard =()=> {

  const [data, setData] = useState([]);
  const storage = window.localStorage;
    
  const navigate = useNavigate();

    useEffect(()=> {
      const cachedData = storage.getItem("todoappUserData");
      //if (data.length > 0) {
        const myData = JSON.parse(cachedData);
        setData(cachedData);
        alert(myData.username);
    // }
   }, []);

   const logOut=()=> {
     storage.setItem("todoappUserData", null);

     if (data.length  < 1 ) {
      navigate('/login');
     }
   }


  return(
	<div>
	 <h1>Dashboard page</h1>
         <button
            onClick={logOut}
            >Logout</button>
  <p>{data}</p>
	</div>
	)
}


export default Dashboard;
*/
