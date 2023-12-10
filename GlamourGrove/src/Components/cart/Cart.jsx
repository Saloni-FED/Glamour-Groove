// Import
import React from "react";
import { useSelector } from "react-redux";
import CartMain from "./CartMain";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { IoIosArrowRoundBack } from "react-icons/io";
// Component
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // Payment
  const handleCheckout = async () => {
    console.log("checkout")
    const stripe = await loadStripe(
      "pk_test_51NxlxxSFBSOzDXjIrAzuKciKK70wt5KvtedMAPK43CGhwhvYefAAai9cMgGjJvQ4xnFerZaSf33Nqsmis5v39elA00xWxzETLu"
    );
    const body = {
      products: Object.values(cartItems),
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "https://glamour-groove-server.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    console.log(session)
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  if (Object.keys(cartItems).length === 0)
    return (
      <div className="text-center font-montserrat text-2xl flex flex-col text-slate-gray">
        Cart is empty
        <button className="flex justify-center p-3">
          <Link to="/shop">
            <IoIosArrowRoundBack className=" text-3xl rounded-full font-bold text-coral-red" />
          </Link>
        </button>
      </div>
    );
  return (
    <div className="w-full h-98 border flex flex-col flex-wrap text-coral-red md:p-10 p-3 font-montserrat">
      <ul className="w-full border-b-2 flex flex-wrap justify-between text-2xl pb-2  font-bold list-none">
        <li className=" w-1/3 ">Item </li>
        <li className="w-1/3  text-center">Price</li>
        <li className="w-1/3 text-center ">Qty</li>
      </ul>
      {Object.values(cartItems).map((item) => (
        <CartMain {...item} key={item._id} />
      ))}
      <div className="flex flex-wrap gap-4 justify-around mt-10">
        <Link to="/shop">
          <h1 className="border-4 w-fit px-8 py-4 md:text-xl text-sm font-bold text-slate-gray hover:bg-red-200 hover:text-black">
            Update cart
          </h1>
        </Link>
        <h1 className="border-4 w-fit px-8 py-4 md:text-xl text-sm font-bold text-slate-gray ">
          Subtotal: $
          {Object.values(cartItems).reduce(
            (total, item) => total + item.quantity * item.price,
            0
          )}
        </h1>
        <h1
          className="border w-fit px-8 py-4 md:text-2xl text-lg font-bold bg-coral-red text-white hover:bg-red-500 cursor-pointer"
          onClick={handleCheckout}
        >
          Checkout
        </h1>
      </div>
    </div>
  );
};

export default Cart;
