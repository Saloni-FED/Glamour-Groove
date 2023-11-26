import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  Header,
  Error,
  About,
  Shop,
  Search,
  WishList,
  ProductDetails,
  Cart,
  Auth,
  PaymentSuccess,
  PaymentFailure,
} from "./Components/index.js";
import Hero from "./Components/Hero.jsx";

// Component
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: ":_id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "success",
        element: <PaymentSuccess />,
      },
      {
        path: "cancel",
        element: <PaymentFailure />,
      },
    ],
  },
  {
    path:"/auth",
    element:<Auth/>
  },
]);


export default App;

// children: [
//   {
//     path: "/",
//     element: <Hero />,
//   },
// {
//   path: "about",
//   element: <About />,
// },
// {
//   path: "search",
//   element: <Search />,
// },
// {
//   path: "shop",
//   element: <Shop />,
// },

// {
//   path: "wishlist",
//   element: <WishList />,
// },
// {
//   path: "cart",
//   element: <Cart />,
// },
// {
//   path: ":_id",
//   element: <ProductDetails />,
// },
// {
//   path: "cart",
//   element: <Cart />,
// },
// {
//   path: "success",
//   element: <PaymentSuccess />,
// },
// {
//   path: "cancel",
//   element: <PaymentFailure />,
// },
