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
