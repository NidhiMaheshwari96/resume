import React from "react";
import "../global.css";
import Logo from "../assets/logo-BakIU_7T.png";

export const Footer = () => {
  return (
    <>
      <footer className="bg-button-text   text-white py-8">
        <div className="container mx-auto flex flex-col gap-7 justify-between px-6">
          <div className=" flex flex-wrap justify-between px-2 md:px-[65px]">
            <div className="md:w-auto mb-6 md:mb-0">
              <img src={Logo} className="h-14 w-full" alt="Logo" />
              <p className="text-lg text-bold px-5">
                Building Careers of Tomorrow
              </p>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-semibold text-white">
                Get Our Weekly Newsletter
              </h2>
              <form className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Type your email..."
                  required
                  className="p-2 rounded"
                />
                <button
                  type="submit"
                  className="md:px-4 md:py-1 p-1 rounded-full bg-white text-black hover:bg-orange-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap justify-around">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-white">Abroadium</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Placement Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Abroadium Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Abroadium Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-white">Support</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Salary Tool
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Grievance Redressal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-white">Scope & Products</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    AI Resume Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    AI Skill Tests
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    AI CV Parsing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    White Labelling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Generative AI
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-white">AI Resources</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    AI - Resume Accuracy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    AI - Resume Enhancer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    AI - Job Match & Apply
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Verified Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Verified Profiles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    & Much More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container text-base md:mx-auto text-center border-t border-white pt-6 mt-6">
          <p class="text-white text-center md:text-right">
            © Copyright By Abroadium.com All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};
