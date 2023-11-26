// Imports
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  addWishListItems,
  removeWishListItems,
} from "../features/wishlist/wishListSlice";
import { Link } from "react-router-dom";
import { CiStar,CiHeart } from "react-icons/ci";

// Component
const ShopMain = ({ product }) => {
  let store = useSelector((state) => state.wishList.items);
  let isTrue = useSelector((state) =>
    state.wishList.items.hasOwnProperty(product._id)
  );
  let dispatch = useDispatch();
  // Render
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full relative">
      <Link to={`/${product._id}`}>
        <img
          src={product.image}
          alt={product._id}
          className="w-[150px] h-[150px] mx-auto rounded-md z-[-1] transition-all duration-300 hover:scale-105"
        />
      </Link>
      {isTrue ? (
        <div className=" w-[150px] font-extrabold text-3xl text-coral-red ">
          <span className="absolute top-[15px] left-60 max-xl:left-48 max-sm:left-64">
            <CiHeart
              onClick={() => {
                toast.success("Product removed from the Wishlist");
                dispatch(removeWishListItems(product._id));
              }}
            />
          </span>
        </div>
      ) : (
        <div className=" w-[150px] font-extrabold text-2xl text-slate-gray bg-black ">
          <span className="absolute top-[15px] left-60  max-xl:left-48 max-sm:left-64">
            <CiHeart
              onClick={() => {
                toast.success("Product is added to the Wishlist");
                dispatch(addWishListItems(product));
              }}
            />
          </span>
        </div>
      )}
      <div className="w-1/2 mx-auto mt-3 flex justify-start max-md:justify-center items-center gap-2 ">
        <CiStar className="text-3xl  text-coral-red font-extrabold  inline" />{" "}
        <span className="font-montserrat leading-normal text-slate-gray text-sm">
          ({product.rating})
        </span>
      </div>
      <div className="w-1/2 mx-auto flex flex-col max-md:items-center leading-normal">
        <h1 className=" font-palanquin  font-semibold">{product.title}</h1>
        <p className="font-montserrat leading-normal text-coral-red text-sm font-bold">
          ${product.price}
        </p>
      </div>
    </div>
    // <div className=" px-7 flex justify-center  hover:drop-shadow-2xl">
    //   <div className="card md:w-52 my-7 ">
    //     <Link to={`/main/${product._id}`}>
    //       {" "}
    //       <img
    //         src={product.image}
    //         alt=""
    //         className="w-full h-64  rounded-3xl"
    //       />
    //     </Link>

    //     <div className="flex flex-col">
    //       <h1 className="text-lg font-bold">{product.title}</h1>
    //       <div className="fav">
    //         <h1>Price:- {product.price}</h1>

    //         {isTrue ? (
    //           <button
    //             className="md:px-10 md:py-2 rounded border-2 hover:bg-purple-800 md:text-sm md:font-bold  block text-sm px-5 py-2"
    //             onClick={() => {
    //               toast.success("Product removed from the Wishlist")
    //               dispatch(removeWishListItems(product._id));
    //             }}
    //           >
    //             Added
    //           </button>
    //         ) : (
    //           <button
    //             className="md:px-10 md:py-2 rounded border-2  hover:bg-purple-900 md:text-sm md:font-bold  block text-sm px-5 py-2"
    //             onClick={() => {
    //               toast.success("Product is added to the Wishlist")
    //               dispatch(addWishListItems(product));
    //             }}
    //           >
    //             Add To Favourite
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ShopMain;
// <AiOutlineHeart
// className="bg-red-500 rounded-full "
// onClick={() => {
//   dispatch(isLikedOrNot())
//   alert("Product should be removed from the Wishlist");
//   dispatch(removeWishListItems(product._id))
// }}
// />
