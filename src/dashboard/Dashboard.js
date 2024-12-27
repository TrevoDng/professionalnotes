import React, {useEffect, useState} from 'react';

const Dashboard =()=> {

 const [data, setData] = useState([]);
     const storage = window.localStorage;
    
    useEffect(()=> {
     const cachedData = storage.getItem("todoappUserData");
     const myData = JSON.parse(cachedData);
      setData(cachedData);
 alert(myData.username);
   }, []);

   const logOut=()=> {
     storage.setItem("todoappUserData", null);
   }


  return(
	<div>
	 <h1>Dashboard page</h1>
         <button
            onClick={logOut}
            >Logout</button>
  <ul>
  {/*
    data.map((item, index)=> (
    <li key={index}> {item.username}  </li>
))
*/
  }

  </ul>
	</div>
	)
}


export default Dashboard;
