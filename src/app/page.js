"use client";
import Navbar from "./components/Navbar";
import Hero from "./sections/hero";
import Logos from "./sections/Logos";
import Introduction from "./sections/Introduction";
import Features from "./sections/Features";
import Integration from "./sections/Integration";
import Faqs from "./sections/Faqs";
import CalltoAction from "./sections/CalltoAction";
import { useState } from "react";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

const Home = () => {
  const [showLogin, setShowlogin]= useState(false)
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div>
     <Navbar 
      onLoginClick={()=>setShowlogin(true)}
      onSignupClick={()=>setShowSignup(true)}
      />
      {showLogin && <LoginModal onClose={()=>setShowlogin(false)}/>}
      {showSignup && <SignupModal onClose={()=>setShowSignup(false)} />}
      <Hero />
      <Logos />
      <Introduction />
      <Features />
      <Integration />
      <Faqs />
      <CalltoAction />
    </div>
  );
};
export default Home;
