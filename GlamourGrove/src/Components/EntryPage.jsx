import React from "react";
import { Link } from "react-router-dom";
const EntryPage = () => {
  return (
    <div className="flex flex-col shadow-2xl items-center md:w-1/2 w-full mx-auto my-28 font-bold text-purple-900">
      <h1 className="mt-7 text-5xl">The Glamour Grove</h1>
      <h1 className="mt-7 text-4xl font-sans font-extrabold">Welcome!</h1>
      <p className="mt-7 text-2xl text-slate-400">
        This Store is to make you look more stylish and pretty
      </p>
      <div>
        <select
          name="Select"
          id=""
          className="inline mt-5  rounded-xl px-4 py-2 bg-purple-900 text-white"
        >
          <option value="Canada">Canada</option>
          <option value="India">India</option>
          <option value="Australia">Austalia</option>
        </select>

        <Link to="/main" className="ml-6 pointer-cursor px-3 ">
          👉
        </Link>
      </div>
    </div>
  );
};

export default EntryPage;
