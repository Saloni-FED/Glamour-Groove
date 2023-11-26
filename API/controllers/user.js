import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from 'dotenv'
dotenv.config()
// If we want to get any information from frontend we get it using req.body
export const signin = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "user Doesnt exist" });

    const isPassWordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPassWordCorrect)
      return res.status(404).json({ message: "Password not matched" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1hr" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  console.log(req.body)

  const { email, password, name } = req.body;
  const existingUser = await User.findOne({ email });
  try {
    if (existingUser)
      return res.status(400).json({ message: "user already exist" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: name,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1hr",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
