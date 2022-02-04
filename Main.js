import React from "react"
import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"
import Messagerie from "./Messagerie"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


export default function Main() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Messagerie" element={<Messagerie />}/>
        
      </Routes>
    </Router>
  );
}