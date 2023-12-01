import React from "react";
import { Link } from "react-router-dom";
const SearchMain = ({ _id, image, price, title }) => {
  return (
    <div className="font-montserrat">
      <div className="card md:w-52 my-7 ">
        <Link to={`/${_id}`}>
          {" "}
          <img src={image} alt="" className="w-full h-64  rounded-3xl" />
        </Link>
        <div className="flex flex-col font-palanquin">
          <h1 className="text-lg font-bold text-coral-red">{title}</h1>
          <div className="text-slate-gray font-bold">
            <h1>Price:- {price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMain;
