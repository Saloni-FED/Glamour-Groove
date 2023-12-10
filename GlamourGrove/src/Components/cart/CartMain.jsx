import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart,addToCart } from "../../features/cart/cartSlice";

const CartMain = ({ description, quantity, price, image, _id }) => {
  console.log(quantity)
  let dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      _id,
      description,
      price,
      image,
    };
    dispatch(addToCart(product));
    console.log("added to cart");
  };
  return (
    <div className="h-fit w-full border-b-2 flex flex-wrap justify-between  place-items-center mt-5 text-coral-red font-montserrat py-2">
      <div className="flex flex-wrap gap-2 w-1/3  ">
        <img src={image} alt="product" className="h-20 w-20 rounded" />
        <p className="text-slate-gray max-md:text-sm">{description}</p>
      </div>
      <div className="h-fit w-1/3 text-center font-bold text-2xl max-md:text-lg">
        ${price*quantity}
      </div>
      <div className="flex flex-wrap justify-center gap-3 w-1/3 h-fit">
        <div
          className="rounded-md border-2 font-bold text-2xl w-fit p-5 max-md:text-lg"
          onClick={() => {
            dispatch(removeFromCart(_id));
            console.log("deleted");
          }}
        >
          -
        </div>
        <div className=" rounded-md border-2 w-fit p-5 font-bold text-2xl max-md:text-lg ">{quantity}</div>
        <div className=" rounded-md border-2 w-fit p-5 font-bold text-2xl max-md:text-lg " onClick={handleAddToCart}>+</div>
      </div>
    </div>
  );
};

export default CartMain;
