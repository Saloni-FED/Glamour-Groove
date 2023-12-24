import { useSelector } from "react-redux";
import WishlistMain from "./WishlistMain";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const WishList = () => {
  const store = useSelector((state) => state.wishList.items);
  let wishLocalStorage = localStorage.getItem("myWish")
  let keyLocal = wishLocalStorage ? JSON.parse(wishLocalStorage) : null;

  
  if (!keyLocal || Object.values(keyLocal).length === 0 )
    return (
      <div className="text-center font-montserrat text-2xl flex flex-col text-slate-gray">
        Wishlist is empty
        <button className="flex justify-center p-3">
          <Link to="/shop">
            <IoIosArrowRoundBack className=" text-3xl rounded-full font-bold text-coral-red" />
          </Link>
        </button>
      </div>
    );
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      {Object.values(keyLocal).map((item) => {
        return <WishlistMain {...item} key={item._id} />;
      })}
    </div>
  );
};

export default WishList;
