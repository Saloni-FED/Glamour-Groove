import { useSelector } from "react-redux";
import WishlistMain from "./WishlistMain";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const WishList = () => {
  const store = useSelector((state) => state.wishList.items);
  let wishLocalStorage = localStorage.getItem("myWish");
  let keyLocal = wishLocalStorage ? JSON.parse(wishLocalStorage) : null;

  if (!keyLocal || Object.values(keyLocal).length === 0)
    return (
      <div className="text-center font-montserrat text-2xl flex flex-col text-slate-gray">
        Wishlist is empty
        <button className="flex justify-center p-3">
          <Link to="/shop">
            <IoIosArrowRoundBack className=" text-3xl rounded-full font-bold text-coral-red hover:-translate-x-2 duration-300" />
          </Link>
        </button>
      </div>
    );
  return (
    <>
      <button className="flex flex-col items-center justify-center  p-3  mx-auto text-lg font-montserrat text-slate-gray">
        Go Back
        <Link to="/shop">
          <IoIosArrowRoundBack className=" text-3xl rounded-full font-bold text-coral-red hover:-translate-x-3 duration-500" />
        </Link>
      </button>
      <div className="flex flex-col justify-center items-center gap-3 h-screen">
        {Object.values(keyLocal).map((item) => {
          return <WishlistMain {...item} key={item._id} />;
        })}
      </div>
    </>
  );
};

export default WishList;
