import React from "react";
import video from "../assets/Video-BMO8ZDzA.mp4";

// const FourthSection = () => {
//   return (
//     <div className=" bg-gray-100 py-10 mb-3">
//       <div className=" flex justify-center bg-gray-100">
//         <div className=" md:w-[78%] rounded-xl py-5 px-4 bg-button-text">
//           <div className=" flex flex-col gap-2 justify-evenly md:flex-row  text-white rounded-xl  md:px-5 ">
//             <div className=" flex align-middle items-center">
//               {/* <img
//                 src="https://resumelanding-nandnigits-projects.vercel.app/assets/video_image-Df436ge5.png"
//                 className=" h-[350px] w-[380px] rounded-xl shadow-lg shadow-gray-600 "
//               /> */}
//               <video
//                 width="600"
//                 controls
//                 autoplay
//                 loop
//                 className="rounded-xl shadow-lg shadow-gray-600"
//               >
//                 <source
//                   src={video}
//                   type="video/mp4"
//                   className="rounded-xl shadow-lg shadow-gray-600"
//                 />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div className="flex flex-col font-semibold px-3 gap-5">
//               <h1 className=" text-center font-bold text-4xl py-2  text-white">
//                 How Our AI Resume Works For You
//               </h1>
//               <div>
//                 <div className="flex items-center hover:border-b-2 shadow-lg rounded-2xl py-2 shadow-gray-600 px-3 hover:border-slate-500 hover:rounded-lg  gap-2">
//                   <div>
//                     <img
//                       src="https://resumelanding-nandnigits-projects.vercel.app/assets/video_icon1-DHipc9jy.png"
//                       className=" h-16 w-16"
//                     />
//                   </div>
//                   <div className=" text-xl">
//                     <p>
//                       Check Resume Score, In few seconds with just couple of
//                       clicks.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center hover:border-b-2 shadow-lg rounded-2xl py-2 shadow-gray-600 px-3 hover:border-slate-500 hover:rounded-lg  gap-2">
//                   <div>
//                     <img
//                       src="https://resumelanding-nandnigits-projects.vercel.app/assets/video_icon2-C5TUAgMx.gif"
//                       className=" h-16 w-16"
//                     />
//                   </div>
//                   <div className=" text-xl">
//                     <p>
//                       Our AI does deep checks on your resume & suggest you
//                       edits.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center hover:border-b-2 shadow-lg rounded-2xl py-2 shadow-gray-600 px-3 hover:border-slate-500 hover:rounded-lg  gap-2">
//                   <div>
//                     <img
//                       src="https://resumelanding-nandnigits-projects.vercel.app/assets/video_icon3-BuqRMpdZ.gif"
//                       className=" h-16 w-16"
//                     />
//                   </div>
//                   <div className=" text-xl">
//                     <p>
//                       <p>Land in Abroad Interviews with our AI technology. </p>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center hover:border-b-2 shadow-lg rounded-2xl py-2 shadow-gray-600 px-3 hover:border-slate-500 hover:rounded-lg  gap-2">
//                   <div>
//                     <img
//                       src="https://resumelanding-nandnigits-projects.vercel.app/assets/video_icon4-EeBo41b0.gif"
//                       className=" h-16 w-16"
//                     />
//                   </div>
//                   <div className=" text-xl">
//                     <p>
//                       Improve Resume with our robust AI, in just few clicks.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-5 border-2 my-8 rounded-xl bg-white justify-center px-5 py-10 shadow-md shadow-gray-600 md:mx-auto md:w-[78%]">
//         <div className="flex flex-col items-center">
//           <h1 className=" text-3xl md:text-5xl font-bold text-center py-6 text-primary-bg">
//             Explore Our Wide Range Of Trending Templates That Recruiters Loves
//             To See
//           </h1>
//           <div className=" flex gap-2 text-primary-bg">
//             <div className=" text-lg text-left flex flex-col gap-1">
//               <div>
//                 <i
//                   className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
//                   aria-hidden="true"
//                 ></i>
//                 Chosen &amp; Crafted by Our Experts
//               </div>
//               <div>
//                 <i
//                   className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
//                   aria-hidden="true"
//                 ></i>
//                 Backed by our Technology
//               </div>
//             </div>
//             <div className=" text-lg text-left flex flex-col gap-1 ">
//               <div>
//                 <i
//                   className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
//                   aria-hidden="true"
//                 ></i>{" "}
//                 Powered by our Robust AI{" "}
//               </div>
//               <div>
//                 <i
//                   className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
//                   aria-hidden="true"
//                 ></i>{" "}
//                 Get it ready in less than 15 minutes
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
//           <div className="relative group">
//             <img
//               src="https://resumelanding-nandnigits-projects.vercel.app/assets/resume1-DXtVXxto.jpg"
//               alt="Assistant Editor Resume Example"
//               className=" h-96 w-full rounded-xl hover:h-[400px]"
//             />
//             <h1 className="font-bold text-xl text-center mt-2" id="homecard">
//               Create Resume Template
//             </h1>
//             <button className="bg-button-text  absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Build Your Resume Now
//             </button>
//           </div>
//           <div className="relative group">
//             <img
//               src="https://resumelanding-nandnigits-projects.vercel.app/assets/homeimage1-xIUNouhH.jpg"
//               alt="Assistant Editor Resume Example"
//               className=" h-96 w-full rounded-xl hover:h-[400px]"
//             />
//             <h1 className="font-bold text-xl text-center mt-2" id="homecard">
//               Create Resume Template
//             </h1>
//             <button className="bg-button-text  absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Build Your Resume Now
//             </button>
//           </div>
//           <div className="relative group">
//             <img
//               src="https://resumelanding-nandnigits-projects.vercel.app/assets/homeimage4-DlnOP8ZO.jpg"
//               alt="Assistant Editor Resume Example"
//               className=" h-96 w-full rounded-xl hover:h-[400px]"
//             />
//             <h1 className="font-bold text-xl text-center mt-2" id="homecard">
//               Create Resume Template
//             </h1>
//             <button className="bg-button-text  absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Build Your Resume Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-5 px-5 py-10 md:mx-auto md:w-[70%]">
//         <div className="flex flex-col items-center text-primary-bg">
//           <h1 className="text-5xl font-bold text-center py-6 ">
//             Looking For Impressive Cover Letters?
//           </h1>
//           <p className=" text-lg">
//             Explore from our 25+ premium Cover Letters, Which are exclusively
//             crafted&nbsp;by&nbsp;our&nbsp;Experts.
//           </p>
//         </div>
//         <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
//           <div className="relative group">
//             <img
//               src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
//               alt="Assistant Editor Resume Example"
//               className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
//             />
//             <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
//               Cover Letter Example
//             </h1>
//             <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Create Your CV{" "}
//             </button>
//           </div>
//           <div className="relative group">
//             <img
//               src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
//               alt="Assistant Editor Resume Example"
//               className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
//             />
//             <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
//               Cover Letter Example
//             </h1>
//             <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Create Your CV{" "}
//             </button>
//           </div>
//           <div className="relative group">
//             <img
//               src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
//               alt="Assistant Editor Resume Example"
//               className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
//             />
//             <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
//               Cover Letter Example
//             </h1>
//             <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Create Your CV{" "}
//             </button>
//           </div>
//           <div className="relative group">
//             <img
//               src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
//               alt="Assistant Editor Resume Example"
//               className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
//             />
//             <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
//               Cover Letter Example
//             </h1>
//             <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Create Your CV{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const FourthSection = () => {
  return (
    <div className=" bg-gray-100 py-10 mb-3">
      <div className="flex justify-center bg-gray-100">
        <div className="md:w-[78%] rounded-xl py-5 px-4 bg-button-text">
          <div className="flex flex-col gap-2 justify-evenly md:flex-row text-white rounded-xl md:px-5">
            <div className="flex items-center">
              <video
                width="700" 
                controls
                autoPlay
                loop
                className="rounded-xl shadow-lg shadow-gray-600"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col font-semibold gap-5 justify-center text-center md:text-left pl-3">
              {" "}
              <h1 className="text-4xl font-bold py-2 text-white text-center ">
                See what our builder can do
              </h1>
              <p className="text-center px-4">
                Learn how to create a mistake-free resume in under 10 minutes
                with our award-winning Resume Builder.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-5 border-2 my-8 rounded-xl bg-white justify-center px-5 py-10 shadow-md shadow-gray-600 md:mx-auto md:w-[78%]">
        <div className="flex flex-col items-center">
          <h1 className=" text-3xl md:text-5xl font-bold text-center py-6 text-primary-bg">
            Get inspired by resume samples from professional resume experts
          </h1>
          <div className=" flex gap-2 text-primary-bg">
            <div className=" text-lg text-left flex flex-col gap-1">
              <div>
                <i
                  className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
                  aria-hidden="true"
                ></i>
                Chosen &amp; Crafted by Our Experts
              </div>
              <div>
                <i
                  className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
                  aria-hidden="true"
                ></i>
                Backed by our Technology
              </div>
            </div>
            <div className=" text-lg text-left flex flex-col gap-1 ">
              <div>
                <i
                  className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
                  aria-hidden="true"
                ></i>{" "}
                Powered by our Robust AI{" "}
              </div>
              <div>
                <i
                  className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "
                  aria-hidden="true"
                ></i>{" "}
                Get it ready in less than 15 minutes
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/resume1-DXtVXxto.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-96 w-full rounded-xl hover:h-[400px]"
            />
            <h1 className="font-bold text-xl text-center mt-2" id="homecard">
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
              className=" h-96 w-full rounded-xl hover:h-[400px]"
            />
            <h1 className="font-bold text-xl text-center mt-2" id="homecard">
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
              className=" h-96 w-full rounded-xl hover:h-[400px]"
            />
            <h1 className="font-bold text-xl text-center mt-2" id="homecard">
              Create Resume Template
            </h1>
            <button className="bg-button-text  absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Build Your Resume Now
            </button>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col gap-5 px-5 py-10 md:mx-auto md:w-[70%]">
        <div className="flex flex-col items-center text-primary-bg">
          <h1 className="text-5xl font-bold text-center py-6 ">
            Choose your professional template
          </h1>
          <p className=" text-lg text-center">
            These professional templates have been tested in the real world and
            proven to bypass HR screening software. Rest easy knowing your
            resume will land in human hands.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
            />
            <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
              Cover Letter Example
            </h1>
            <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Create Your CV{" "}
            </button>
          </div>
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
            />
            <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
              Cover Letter Example
            </h1>
            <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Create Your CV{" "}
            </button>
          </div>
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
            />
            <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
              Cover Letter Example
            </h1>
            <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Create Your CV{" "}
            </button>
          </div>
          <div className="relative group">
            <img
              src="https://resumelanding-nandnigits-projects.vercel.app/assets/cv4-BKzozuaG.jpg"
              alt="Assistant Editor Resume Example"
              className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
            />
            <h1 className="font-bold  text-xl text-center mt-2 text-button-text">
              Cover Letter Example
            </h1>
            <button className="bg-button-text absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Create Your CV{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
