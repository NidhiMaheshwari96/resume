import React from "react";

const SixthSection = () => {
  return (
    <div className="  py-4 flex justify-center  bg-gray-100">
      <div className=" flex flex-col md:w-[40%] justify-center  px-2 py-10 text-white gap-5 ">
        <div className=" text-center font-bold text-2xl text-primary-bg">
          Get Started with Abroadium.com
        </div>
        <div className=" text-center text-lg text-primary-bg">
          Want to learn what Abroadium can do for you? See for yourself with a
          free premium content on Verified Overseas Opportunity
        </div>
        <div className=" text-center">
          <a href="/">
            <button className="bg-primary-bg text-primary-text text-lg px-6 py-2 rounded-full  font-bold hover:shadow-2xl hover:shadow-slate-500">
              Check it Out
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
