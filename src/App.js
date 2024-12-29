import { BrowserRouter, 
Routes, 
Route, 
Navigate, 
useNavigate } from 'react-router-dom';

import { useContext, useEffect, 
useState} from "react";

import { AuthContext, AuthProvider, INTIAL_STATE } from './auth/context/AuthContext';
import './App.css';
import Login from './auth/login/Login';
import RegisterUser from "./auth/login/Register";
import Dashboard from './dashboard/Dashboard';
import { useInactivityTimeout } from './auth/activity/inactivity';

function App() {

  const [user, setUser] = useState(null);
  const {currentUser} = useContext(AuthContext);                          
   // const currentUser = false;

   const isInactive = useInactivityTimeout(15 * 60 * 1000); // 15 minutes inactivity timeout

   //const navigate = useNavigate();

  // alert("outside if statement", user);

   useEffect(()=> {
    if(currentUser) {
      setUser(currentUser);
      console.log("inside if statement", currentUser);
     }

     if (isInactive) {
      alert("User is inactive. Logging out...");
      console.log("User is inactive. Logging out...");
      localStorage.removeItem("todoappUserData"); // Clear user data from localStorage
      //navigate("/login"); // Redirect to login
      <Navigate to="/login" />
    }
    
     
    }, [currentUser, isInactive]);

   const RequireAuth = ({ children }) => {
    return currentUser && currentUser.username && currentUser.email ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  };
  

  

  return (
	<div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
</div>
	  );
}

export default App;


//import logo from './logo.svg';
//import React, { Profiler, useEffect, useState } from 'react';
//import './App.css';
//import HomeContent from './pages/HomeContent';
//import Login from './pages/login/Login';
//import { AuthContext } from './auth/context/AuthContext';
/*
import UserAcount from './UserAccounts/UserAccount';
import LandingPage from './pages/login/LandingPage';
import Statement from './pages/service/statement/Statement';
import PageNotFound from './pages/pagenotfound/PageNotFound';

import Navbar from './pages/navbar/Navbar';
import { AuthContext, AuthProvider, INTIAL_STATE } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import SideBarLayout from './pages/sidebarlayout/SidebarLayout';
import ContactUs from './pages/aboutus/ContactUs';
import AboutUs from './pages/aboutus/AboutUs';
import RegisterUser from './pages/login/Register';
import Logout from './pages/login/Logout';
import History from './pages/service/history/History';
import CurrentBalance from './pages/service/CurrentBalance';
import AccountDetails from './pages/service/accountDetails/AccountDetails';
import SendProofCollectData from './pages/service/proofofpayment/SendProofCollectData';
import SendProofOfPayment from './pages/service/proofofpayment/SendProofOfPayment';

const NavbarHolder =() => <Navbar />;
*/
