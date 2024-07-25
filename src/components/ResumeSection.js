import React from "react";
import resume1 from "../assets/resume1.jpg";

const ResumeSection = () => {
  return (
    <div className="bg-white-100 py-10 mb-3">
      <div className="flex flex-col items-center gap-5  md:mx-auto md:w-[70%]">
        <h1 className="text-5xl font-bold text-center text-primary-bg">
          Let your resume do the work.
        </h1>
        <p className="text-center text-primary-bg mb-6">
          Join 5,000,000 job seekers worldwide and get hired faster with your
          best resume yet.
        </p>
        {/* <button className="bg-red-500 text-white px-6 py-2 rounded-full mb-10">
          Create Resume
        </button> */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white rounded-xl p-5 shadow-lg w-full md:w-1/3">
            <img
              src={resume1}
              alt="Resume 1"
              className="w-full h-auto rounded"
            />
            <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
              Cover Letter Example
            </h1>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-lg w-full md:w-1/3">
            <img
              src={resume1}
              alt="Resume 2"
              className="w-full h-auto rounded"
            />
            <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
              Cover Letter Example
            </h1>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-lg w-full md:w-1/3">
            <img
              src={resume1}
              alt="Resume 3"
              className="w-full h-auto rounded"
            />
            <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
              Cover Letter Example
            </h1>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
