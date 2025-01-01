import React from "react";
import { signInWithGoogle } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Sign in with Google 
        I am Sunil Kumar
      </button>
    </div>
  );
};

export default Auth;
