import React from 'react';
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/user-profile' element={<UserProfile/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App