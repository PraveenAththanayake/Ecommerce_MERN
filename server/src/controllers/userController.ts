import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import User from "../models/userModel";

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const userExists = await username.findOne("email");
  if (userExists) {
    res.status(400).send("User already exists");
  }
});

export { createUser };
