//import React, { Profiler, useEffect, useState } from 'react';
//import './App.css';
import { BrowserRouter, 
Routes, 
Route, 
Navigate, 
useNavigate } from 'react-router-dom';

//import HomeContent from './pages/HomeContent';
//import Login from './pages/login/Login';
import { useContext, useEffect, 
useState} from "react";
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
import { AuthContext, AuthProvider, INTIAL_STATE } from './auth/context/AuthContext';

import logo from './logo.svg';
import './App.css';
import Login from './auth/login/Login';
import RegisterUser from "./auth/login/Register";
import Dashboard from './dashboard/Dashboard';

function App() {

  const [user, setUser] = useState([]);
  const {currentUser} = useContext(AuthContext);                          
   // const currentUser = false;


  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />; 
    }

   useEffect(()=> {
    if(currentUser) {
      setUser(currentUser);
     }
     
    }, []);

  return (
	<div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Login />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/registeruser" index element={<RegisterUser />} />
      <Route path="/dashboard" index element={<RequireAuth><Dashboard /></RequireAuth>} />
    </Routes>
  </BrowserRouter>
</div>
	  );
}

export default App;
