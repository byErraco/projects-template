import { createUser } from "../interface/user";
import axios from "../libs/axios";

export const createUserRequest = async (data: createUser) =>
  axios.post("/api/auth/register", data);
