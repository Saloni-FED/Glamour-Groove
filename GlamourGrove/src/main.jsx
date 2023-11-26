import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { router } from "../src/App";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <Toaster/>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
