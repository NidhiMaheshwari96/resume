import React from "react";

const Services = () => {
  return (
    <div className="py-8 bg-secondary-bg">
      <div className=" font-bold text-4xl flex py-6 px-6  justify-center text-white">
        Make a resume that gets results
      </div>
      <div className=" flex flex-col md:flex-row gap-2 md:gap-7 py-5 px-5 justify-center">
        <div className=" flex flex-col items-center">
          <div>
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/1-JZJUr66k.png"
              alt=""
              className=" h-48 hover:h-52  hover:shadow-gray-200"
            />
          </div>
          <div className=" font-bold text-lg text-center text-white">
            Upload Resume
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div>
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/2-CXQ5uLgE.png"
              alt=""
              className=" h-48 hover:h-52  hover:shadow-gray-200"
            />
          </div>
          <div className=" font-bold text-lg text-center text-white">
            AI Analysis
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div>
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/3-4WI-px03.png"
              alt=""
              className=" h-48 hover:h-52  hover:shadow-gray-200"
            />
          </div>
          <div className=" font-bold text-lg text-center text-white">
            Select Design
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div>
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/4-DIt5WKfb.png"
              alt=""
              className=" h-48 hover:h-52  hover:shadow-gray-200"
            />
          </div>
          <div className=" font-bold text-lg text-center text-white">
            Improve with AI
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div>
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/5-zkZa-ln-.png"
              alt=""
              className=" h-48 hover:h-52  hover:shadow-gray-200"
            />
          </div>
          <div className=" font-bold text-lg text-center text-white">
            Download
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-4">
        <button className="bg-primary-text text-primary-bg  px-5 py-3 rounded-full text-lg  font-bold  hover:shadow-2xl hover:shadow-slate-500">
          Create my Resume
        </button>
      </div>
    </div>
  );
};

export default Services;
