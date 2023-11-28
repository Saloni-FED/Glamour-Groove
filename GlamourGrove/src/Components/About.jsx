import React from "react";
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa6"
const About = () => {
  return (
    <div className=" w-full md:w-1/2 m-auto mt-20 font-montserrat">
      <h1 className="text-center text-coral-red font-bold text-3xl">
        Welcome to GlamourGrove Clothing , where fashion meets individuality and
        quality
      </h1>
      <p className="text-xl text-slate-gray font-bold mt-5 text-center">
        Our collections are a reflection of the latest fashion trends while
        remaining timeless and versatile. GlamourGrove Clothing  places
        customers at the heart of everything we do. Your satisfaction is our top
        priority, and we strive to provide a seamless shopping experience, from
        easy navigation on our website. we will surely provide a support team to
        increase our customers satisfaction
      </p>
      <h2 className="text-center mt-3 text-red-600 font-semibold text-2xl">Follow us on our Social Media handles 👇</h2>
      <div className="w-fit  m-auto  flex gap-4 mt-3 text-coral-red">
        <a href="https://github.com/Saloni-FED"><FaGithub className="text-3xl  transform transition duration-500 hover:scale-125"/></a>
        <a href="https://www.linkedin.com/in/saloni-pandey-454671210/"><FaLinkedin className="text-3xl  transform transition duration-500 hover:scale-125"/></a>
        <a href="https://www.instagram.com/salonipandey66/?next=%2F"><FaInstagram className="text-3xl transform transition duration-500 hover:scale-125"/></a>
      </div>
    </div>
  );
};

export default About;
