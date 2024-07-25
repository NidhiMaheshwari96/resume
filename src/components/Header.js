import React, { useState } from "react";
import Logo from "../assets/logo-BakIU_7T.png";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal";
import SignUp from "../SignUp";

const Header = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isSignUpModelOpen, setSignUpIsModelOpen] = useState(false);

  const handleLogin = () => {
    setIsModelOpen(true);
  };
  const handleSignUp = () => {
    setSignUpIsModelOpen(true);
  };
  return (
    <>
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* <div className="text-2xl font-bold text-primary">Abroadium</div> */}
          <div class="flex-shrink-0 flex items-center">
            <a to="/" class="">
              <img src={Logo} alt="logo" class=" w-full h-14" />
            </a>
          </div>
          <nav className="space-x-4 text-secondary">
            <a
              href="#"
              className="text-primary-text hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
            >
              Resume Score
            </a>
            <a
              href="#"
              className="text-primary-text hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
            >
              AI Resume Builder
            </a>
            <a
              href="#"
              className="text-primary-text hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
            >
              AI Resume Fetch
            </a>
            <a
              href="#"
              className="text-primary-text hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-primary-text hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-primary-text hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
            >
              Blog
            </a>
          </nav>
          <div>
            <button
              onClick={handleLogin}
              className="bg-primary-text px-4 py-2 rounded mr-2 text-primary-bg"
            >
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="bg-primary-text px-4 py-2 rounded text-primary-bg"
            >
              Signup
            </button>
          </div>
        </div>
      </header>
      <LoginModal isOpen={isModelOpen} onClose={setIsModelOpen} />
      <SignUp isOpen={isSignUpModelOpen} onClose={setSignUpIsModelOpen} />
    </>
  );
};

export default Header;
