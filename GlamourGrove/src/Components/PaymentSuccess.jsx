import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  return (
    <div className="border md:w-1/2  w-full m-auto md:my-20 my-5 text-center p-3 shadow-2xl font-palanquin">
      <h1 className="text-3xl text-coral-red font-bold">
        Your Payment is Successfull 🤝
      </h1>
      <h2 className="text-lg text-slate-gray font-semibold mt-2">
        Thank for Buying 😊. Have A Good day
      </h2>
      <Link to="/shop">
        <h2 className="border w-fit m-auto mt-4 px-6 py-3 text-slate-gray font-bold hover:shadow-purple-2xl hover:bg-red-200 cursor-pointer">
          <IoIosArrowRoundBack className="text-coral-red text-lg"/>
        </h2>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
