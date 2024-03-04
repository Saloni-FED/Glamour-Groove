// All Imports
import React from "react";
import { useProduct } from "../../Utils/CustomHooks/useProduct";
import { useState } from "react";
import toFind from "../../Utils/HelperFunction/toFind";
import { AiOutlineMenu } from "react-icons/ai";
import SearchMain from "./SearchMain";

// Component
const Search = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  let [productSearch, loading, setProductSearch] = useProduct();
  console.log(loading)
  let products = toFind(searchVal, productSearch);
  
  if(loading) return <h1 className="text-center font-montserrat text-xl text-coral-red">Loading....</h1>
  // Rendering
  return (
    <>
    
      <div className="flex justify-center mt-20 font-montserrat">
        <input
          type="text"
          name=""
          id=""
          placeholder="🔍 search by brand"
          className="border-2 bg-red-100 px-7 py-3 md:w-1/2 sm:w-1/2 w-full md:m-0 mx-2 shadow-xl outline-none rounded "
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center w-full mt-5 font-montserrat">
        <div className="md:w-1/4  h-fit md:text-left yext-center">
          <AiOutlineMenu
            className="font-bold text-3xl cursor-pointer text-coral-red"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
          />
          {isMenu && (
            <ul className="flex flex-col gap-5 mt-5 cursor-pointer text-slate-gray font-bold text-lg w-fit xl:visible">
              <li
                className="transition-all linear duration-300 hover:scale-110"
                onClick={() => {
                  setSearchVal("");
                }}
              >
                All
              </li>
              <li
                className="transition-all linear duration-300 hover:scale-110"
                onClick={() => {
                  setSearchVal("women");
                }}
              >
                Women Wear
              </li>
              <li
                className="transition-all linear duration-300 hover:scale-110"
                onClick={() => {
                  setSearchVal("men");
                }}
              >
                Mens Wear
              </li>
              <li
                className="transition-all linear duration-300 hover:scale-110"
                onClick={() => {
                  setSearchVal("kids");
                }}
              >
                Kids
              </li>
            </ul>
          )}
        </div>
        <div className="md:w-1/2 w-1/2 max-md:w-full md:px-0 px-1 md:border h-fit flex flex-wrap justify-center gap-3">
          {products.length === 0 ? (
            <h1 className="font-extrabold md:text-3xl text-xl text-coral-red">
              No Product Found 🤷‍♂️
            </h1>
          ) : (
            products.map((product) => {
              return <SearchMain {...product} key={product._id}/>;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
