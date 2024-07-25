import React from "react";
import "../global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SliderSecond from "./SliderSecond";

const Slider = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row">
        <div className="px-3 py-3 md:w-[500px]">
          <div className="flex flex-col gap-4">
            <div className="font-extrabold text-5xl font-sans text-primary-bg">
              Abroadium's AI Powered Resume Tool, Is Live NOW
            </div>
            <div className=" text-lg font-medium text-slate-700">
              Resume Score, Enhanced Resume &amp; much more. Now Apply Job with
              confidence with our all in one solution under one roof.
            </div>
            <div className=" flex flex-wrap gap-4">
              <button className="bg-primary-text text-primary-bg px-6 py-2 text-lg rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500">
                {" "}
                Sign Up!-It's 100% Free!
              </button>
              <button className="bg-primary-bg text-primary-text text-lg px-6 py-2 rounded-full  font-bold hover:shadow-2xl hover:shadow-slate-500 ">
                {" "}
                Build your Resume
              </button>
            </div>
            <div className=" font-bold text-base">
              <i
                className="fa-solid fa-star text-yellow-500"
                aria-hidden="true"
              ></i>{" "}
              <i
                className="fa-solid fa-star text-yellow-500"
                aria-hidden="true"
              ></i>{" "}
              <i
                className="fa-solid fa-star text-yellow-500"
                aria-hidden="true"
              ></i>{" "}
              <i
                className="fa-solid fa-star text-yellow-500"
                aria-hidden="true"
              ></i>{" "}
              <i
                className="fa-solid fa-star text-yellow-500"
                aria-hidden="true"
              ></i>{" "}
              <span className=" text-primary-bg">
                Reviews Certified by Recruiters &amp; Admired by Jobseekers
              </span>
            </div>
            <div className=" flex items-center align-middle ">
              <div className=" text-lg font-bold text-primary-bg">
                As Featured on
              </div>
              <div>
                <img
                  src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584856.jpg"
                  className=" h-24 w-24"
                />
              </div>
              <div>
                <img
                  src="https://parspng.com/wp-content/uploads/2021/09/instagram-7.png"
                  className=" h-16 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-3">
          <div className="hidden md:block md:max-w-lg p-4">
            <div className="slick-slider slick-initialized">
              {" "}
              <SliderSecond />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
