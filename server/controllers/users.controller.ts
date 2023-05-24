import { Request, Response } from "express";
import User from "../models/User";
import { NotFound } from "http-errors";
import { SignupSchemaType } from "../schemas/user.schema";

export const createUser = async (
  req: Request<unknown, unknown, SignupSchemaType>,
  res: Response
) => {
  // find existing user
  const userFound = await User.findOne({
    email: req.body.email,
  });

  // throw with status code
  if (userFound) return res.status(403).json([{ message: "Email is in use" }]);

  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  await newUser.hashPassword();

  const createdUser = await newUser.save();

  // save user's note to the client
  res.json(createdUser);
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({});
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const noteFound = await User.findById(req.params.id);
  if (!noteFound) throw new NotFound("Note not found");
  res.json(noteFound);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) throw new NotFound("Note not found");
  res.sendStatus(204);
};

export const updateUser = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
};
