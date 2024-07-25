import React from "react";
const testimonials = [
  {
    name: "Jaide F",
    role: "Registered Nurse",
    text: "A fantastic resume creator! Helped me so much with landing a job in an industry I’d wanted to get into for quite some time.",
  },
  {
    name: "Elisabeth M",
    role: "Account Manager",
    text: "Very easy to use! Made a complete resume in under 20 minutes!",
  },
  {
    name: "Kenneth",
    role: "Software Engineer",
    text: "Fantastic service! Great templates and cover letter assistance. Helped me land a great position and fast!",
  },
];
const TestimonialCard = ({ name, role, text, image }) => (
  <div className="bg-white rounded-xl p-5 shadow-lg flex flex-col justify-between h-full">
    <div className="flex items-center mb-4">
      {/* <img src={image} alt={name} className="w-12 h-12 rounded-full mr-3" /> */}
      <div>
        <h3 className="font-bold text-primary-bg">{name}</h3>
        <p className="text-button-text">{role}</p>
      </div>
    </div>
    <p className="text-primary-bg">{text}</p>
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10 mb-3">
      <div className="flex flex-col gap-5 px-5 py-10 md:mx-auto md:w-[70%]">
        <h1 className="text-5xl font-bold text-center py-6 text-primary-bg ">
          What people are saying about our Resume Maker
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div className="flex-1">
              <TestimonialCard key={index} {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
