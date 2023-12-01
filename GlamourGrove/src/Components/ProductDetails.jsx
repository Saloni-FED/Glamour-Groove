// Imports
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../Utils/CustomHooks/useProduct";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
// Component
const ProductDetails = () => {
  let dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  let { _id } = useParams();
  console.log(_id)
  let [product, setProducts] = useProduct();

  if (product.length == 0)
    return (
      <h1 className="text-center mt-20 text-xl font-bold text-coral-red">
        Loading......
      </h1>
    );
  let products = product.find((item) => {
    return item._id == _id;
  });
  let discount = products.original_price - products.price;
  let discountPercentage = (discount / products.original_price) * 100;
  //  Rendering
  return (
    <div className="w-full md:flex md:flex-row flex flex-col mt-10 sm:flex sm:flex-row md:my-20">
      <div className=" md:w-1/2 w-full h-96   sm:w-full ">
        <img
          src={products.image}
          alt="product"
          className="md:w-1/2 md:h-full  m-auto  w-11/6 h-full  rounded-3xl"
        />
      </div>
      <div className="md:w-1/2  h-96 text-left  w-11/6 flex-row md:m-0 ml-6">
        <h1 className="mt-3 text-coral-red font-montserrat text-3xl font-bold mb-4">
          {products.title}
        </h1>
        <h2 className="text-lg font-bold text-slate-gray font-palanquin">
          {products.description}
        </h2>
        <h1 className="mt-2 w-fit text-xl font-semiBold bg-coral-red  rounded-full p-3 font-montserrat text-white ">
          Size:-{products.size}
        </h1>
        <h3 className="line-through font-montserrat">
          Original Price:-{products.original_price}
        </h3>
        <h4 className="font-bold text-coral-red">
          Discount ${products.price} -------${Math.trunc(discountPercentage)}
          %OFF{" "}
        </h4>
        <div className="flex flex-wrap gap-3 mt-3">
          <div
            className="rounded-md border-2 w-fit p-5 font-bold text-2xl text-coral-red max-md:text-lg cursor-pointer"
            onClick={() => {
              if (
                cartItems[products._id] &&
                cartItems[products._id].quantity > 0
              ) {
                dispatch(removeFromCart(products._id));
              }
            }}
          >
            -
          </div>
          {cartItems[products._id] && cartItems[products._id].quantity > 0 ? (
            <div className="rounded-md border-2 w-fit p-5 font-bold text-2xl text-coral-red max-md:text-lg cursor-pointer ">
              {cartItems[products._id].quantity}
            </div>
          ) : (
            <div className="rounded-md border-2 w-fit p-5 font-bold text-2xl text-coral-red max-md:text-lg cursor-pointer ">Add</div>
          )}
          <div
            className="rounded-md border-2 w-fit p-5 font-bold text-2xl text-coral-red max-md:text-lg cursor-pointer"
            onClick={() => {
              if (products.in_stock) {
                dispatch(addToCart(products));
              }
              else{
                toast.error("Product is Unavailable")
              }
            }}
          >
            +
          </div>
        </div>
        {products.in_stock ? (
          <Link to="/cart">
            <button
              className="md:px-10 md:py-2 rounded md:mt-4 mt-2  text-white md:text-lg md:font-bold bg-coral-red font-montserrat block text-sm px-5 py-2"
              onClick={() => {
                dispatch(addToCart(products));
              }}
            >
              Add To cart
            </button>
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="bg-purple-300 line-through mt-2"
          >
            Not Available
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
