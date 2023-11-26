import React from 'react'
import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
const PaymentFailure = () => {
  return (
    <div className="border md:w-1/2  w-full m-auto md:my-20 my-5 text-center p-3 shadow-2xl font-montserrat py-10">
      <h1 className="text-lg text-slate-gray font-bold">
        Your Payment is not completed Try again after sometime ❌
      </h1>
      <Link to="/shop">
        <h2 className="border-b-4 w-fit m-auto mt-4 px-6 py-3  text-slate-gray font-bold hover:shadow-purple-2xl hover:bg-red-200 cursor-pointer">
           <IoIosArrowRoundBack className="text-coral-red text-2xl"/>
        </h2>
      </Link>
    </div>
  )
}

export default PaymentFailure
