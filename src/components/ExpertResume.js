import React from "react";

const ExpertResume = () => {
  return (
    <div className=" bg-white-100 pb-10 mb-3">
      <div className="flex flex-col gap-5  my-8 rounded-xl bg-white justify-center px-5 py-5  md:mx-auto md:w-[78%]">
        <div className="flex flex-col items-center">
          <h1 className=" text-3xl md:text-5xl font-bold text-center py-6 text-primary-bg">
            Get inspired by resume samples from professional resume experts
          </h1>
          <div className=" flex gap-2 text-primary-bg">
            <p>
              Search by job title to find resumes from resume experts that can
              inspire your own resume creation
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/resume1-DXtVXxto.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-96 w-full rounded-xl "
            />
            <h1 className="font-bold text-xl text-center mt-2 text-primary-bg">
              Create Resume Template
            </h1>
            <button className="bg-button-text  absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Build Your Resume Now
            </button>
          </div>
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/homeimage1-xIUNouhH.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-96 w-full rounded-xl "
            />
            <h1 className="font-bold text-xl text-center mt-2 text-primary-bg">
              Create Resume Template
            </h1>
            <button className="bg-button-text  absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Build Your Resume Now
            </button>
          </div>
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/homeimage4-DlnOP8ZO.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-96 w-full rounded-xl "
            />
            <h1 className="font-bold text-xl text-center mt-2 text-primary-bg">
              Create Resume Template
            </h1>
            <button className="bg-button-text  absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Build Your Resume Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertResume;
