import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWishListItems } from "../../features/wishlist/wishListSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";

const WishlistMain = ({ title, image, description, price, size, _id }) => {
  const dispatch = useDispatch();
  let store = useSelector((state) => state.wishList.items);
  let isTrue = useSelector((state) =>
    state.wishList.items.hasOwnProperty(_id)
  );
  return (
    <div className=" md:w-1/2 gap-3 max-md:gap-1 w-full border-b-2 py-5 flex justify-center items-center font-montserrat ">
      <img src={image} alt="" className="w-56 md:h-56 h-40 w-30  rounded-md" />
      <div className=" w-full ">
        <h2 className="text-coral-red font-bold max-md:font-light text-sm md:text-lg">{description}</h2>
        <h4 className="mt-2 text-slate-gray ">{title}</h4>
        <h2 className="mt-1 text-slate-gray font-semibold">${price}</h2>
        <h2 className="text-coral-red font-semibold">Size: {size}</h2>
        <button
        className=""
        onClick={() => {
          dispatch(removeWishListItems(_id));
          toast.success("Removed From WishList")
        }}
      ><CiHeart className={`text-3xl font-extrabold text-coral-red`}/></button>
      </div>
      <hr className="text-slate-gray w-10"/>
    </div>
    //
  );
};

export default WishlistMain;

// {/* <div className="md:flex md:gap-5 text-black shadow-gray-200 rounded-3xl drop-shadow-2xl"> */}
//     <div className="md:w-56  md:h-56 w-full h-1/2">
//       <img src={image} alt="" className="w-full h-full rounded-xl mx-auto" />
//     </div>
//     <div className="">
//       <h2 className="text-lg md:text-xl font-bold">{description}</h2>
//       <h4 className="text-lg md:text-lg font-semibold">{title}</h4>
//       <h2 className="text-lg md:text-xl">${price}</h2>
//       <h2 className="text-lg md:text-xl">Size: {size}</h2>
//       <Link to={`/main/${_id}`}>
//         <button className="md:px-4 md:py-2 rounded text-white bg-purple-900 md:text-lg md:font-bold block text-sm px-3 py-1 w-full md:w-fit">
//           See Details
//         </button>
//       </Link>
//       <button
//         className="md:px-4 md:py-2 rounded md:mt-2 text-white md:text-lg md:font-bold bg-purple-900 mt-2 block text-sm px-3 py-1 w-full md:w-fit"
//         onClick={() => {
//           dispatch(removeWishListItems(_id));
//           toast.success("Removed From WishList")
//         }}
//       >
//         Remove from wishlist
//       </button>
//     </div>
//   </div>
