import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
// import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Home />
      </div>
    </>
  );
}

export default App;
