import { NavLink } from "react-router-dom";
import { navLinks } from "../../Utils/constant/constants.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);
  let cartItems = useSelector((state) => state.cart.cartItems);

  // Function to check if present in local storage or not
  function isItemInLocalStorage(key) {
    return localStorage.getItem(key) !== null;
  }

  let cartQuantity = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  console.log(cartQuantity);

  return (
    <header className="flex justify-around md:items-center py-2 max-md:flex-col max-md:gap-3">
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold text-coral-red leading-normal font-montserrat ">
          GlamorGrove
        </h1>
        {isOpen ? (
          <MdOutlineCancel
            className="hidden max-md:block text-2xl font-bold text-coral-red "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <RxHamburgerMenu
            className="hidden max-md:block text-xl font-bold text-coral-red "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </div>

      <div
        className={`${
          isOpen ? "max-md:block" : "max-md:hidden"
        } flex gap-16 max-lg:gap-5 max-md:justify-between max-md:ml-3`}
      >
        <nav className=" flex items-center">
          <ul className=" flex md:gap-10 gap-5 max-md:flex-col">
            {navLinks.map((items) => (
              <li key={items} className="">
                <NavLink
                  to={items.href}
                  className={({ isActive }) => {
                    return (
                      "font-montserrat leading-normal text-lg " +
                      (isActive ? "text-coral-red" : "text-slate-gray")
                    );
                  }}
                >
                  {items.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" flex gap-5 max-md:flex-col">
          {isItemInLocalStorage("userInfo") ? (
            <NavLink to="auth">
              <div
                className="border border-coral-red px-4 py-2 rounded-md font-bold max-sm:font-medium max-sm:px-6 max-sm:py- w-fit text-white max-md:mt-3 bg-coral-red hover:bg-red-500"
                onClick={() => {
                  localStorage.removeItem("userInfo");
                }}
              >
                logout
              </div>
            </NavLink>
          ) : (
            <NavLink to="auth">
              <div className="border border-coral-red px-4 py-2 rounded-md font-bold max-sm:font-medium max-sm:px-6 max-sm:py- w-fit text-white max-md:mt-3 bg-coral-red hover:bg-red-500">
                Sign in
              </div>
            </NavLink>
          )}

          <div className="flex ">
            <NavLink to="/cart">
              <CiShoppingCart className="text-4xl max-sm:text-3xl" />
            </NavLink>
            <h1 className="bg-red-500 text-white text-sm rounded-full h-fit px-2 -ml-3 max-sm:-ml-2">
              {cartQuantity ? cartQuantity : " 0 "}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <nav className="border  p-5 text-indigo-900 shadow-xl text-lg font-bold bg-purple-200">
        <ul className="flex flex-wrap justify-around">
          <Link to="/main" className="px-5  hover:bg-purple-300">
            Shop
          </Link>
          <Link to="/main/about" className="px-5">
            About
          </Link>
          <Link to="/main/search" className="px-5">
            Search
          </Link>
          <Link to="/main/wishlist" className="px-5">
            Wishlist
          </Link>
          <Link to="/main/cart" className="px-5">
            Cart
          </Link>
          <Link to='/auth'><li className=" px-5">Sign in</li></Link>
        </ul>
      </nav> */
}
{
  /* <CarouselMain /> */
}
{
  /* <Outlet /> */
}
