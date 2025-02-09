import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/shop">
      <button className=" flex justify-center items-center gap-4 px-8 py-4 border font-montserrat text-lf leading-none bg-coral-red text-white border-coral-red rounded-full">
        Shop Now
        <FaArrowDown className="bg-white text-slate-gray px-1 rounded-full" />
      </button>
    </Link>
  );
};

export default Button;
