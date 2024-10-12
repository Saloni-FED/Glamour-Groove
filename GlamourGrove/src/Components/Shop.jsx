// All imports
import React, { useState } from "react"; // Add useState import
import { useProduct } from "../../Utils/CustomHooks/useProduct";
import ShopMain from "./ShopMain";
import sortByAsc from "../../Utils/HelperFunction/sortByAsc";
import sortByDes from "../../Utils/HelperFunction/sortByDes";

// Component
const Shop = () => {
  const [products,loading, setProducts] = useProduct();
  const [originalProducts] = useProduct();
  const [isAsc, setIsAsc] = useState(false);
  const [isDesc, setIsDesc] = useState(false);

  const handleSortByAsc = () => {
    const sorted = sortByAsc(products);
    setProducts(sorted);
    setIsAsc(true);
    setIsDesc(false);
  };
  
  const handleSortByDes = () => { 
    const sorted = sortByDes(products);
    setProducts(sorted);
    setIsAsc(false);
    setIsDesc(true);
  };

  const handleClear = () => {
    setProducts(originalProducts);
    setIsAsc(false); 
    setIsDesc(false);
  };

  // Rendering
  if(loading) return <h1 className="text-center mt-10 text-2xl text-coral-red">Loading...</h1>
  return products.length === 0 ? (
    <><h1 className="text-center font-palanquin text-xl text-coral-red">Loading.....</h1></>
  ) : (
    <>
      <section id="products" className="max-container max-sm:mt-12 ">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold p-5 max-md:p-0 border-2">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
        </div>
        <div className="flex gap-11 flex-wrap xl:justify-end justify-center  max-md:gap-1 mr-5 mt-11 font-bold text-3xl pt-4">
          <button
            className={
              "py-2 px-6 rounded-md text-sm border-2  text-slate-gray  cursor-pointer font-montserrat" +
              (isDesc ? " bg-red-300 text-white" : "") 
            }
            onClick={handleSortByDes} 
          >
            High to Low 👇
          </button>
          <button
            className={
              "py-2 px-6 rounded-md text-sm border-2 text-slate-gray cursor-pointer font-montserrat" +
              (isAsc ? " bg-red-300 text-white" : "") 
            }
            onClick={handleSortByAsc}
          >
            Low to High 👇
          </button>
          {(isAsc || isDesc) && (
            <button
              className="py-2 px-6 rounded-1xl text-sm border-2 text-slate-gray font-montserrat cursor-pointer"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 items-stretch">
          {products.map((product) => (
            <ShopMain product={product} key={product._id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Shop;
