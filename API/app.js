import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Products from "./models/Product.js";
import { Stripe } from "stripe";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.SECURE_TEST);
// const stripe = new Stripe(process.env.STRIPE_TEST);
const stripe = new Stripe(process.env.STRIPE_TEST);

const app = express();

import Users from "./routes/users.js";
// Connecting Mongodb
const dbURI = process.env.MONGODB_URI;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Cors
app.use(cors());
app.use(express.json());
// User Routes
app.use("/users", Users);

// Get Product From Mongodb
app.get("/product", async (req, res) => {
  try {
    const product = await Products.find();
    console.log(product);
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

// Payment
app.post("/api/create-checkout-session", async (req, res) => {
  console.log("stripe api")
  console.log(req.body);
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "USD",
      product_data: {
        name: product.title,
        images: [product.image],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  });

  res.json({ id: session.id });
});
// Running Server
const port = 3000;
app.listen(port, () => {
  console.log("Server is listening at port 3000");
});
