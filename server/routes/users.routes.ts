import Router from "express-promise-router";
import {
  loginHandler,
  profileHandler,
  signupHandler,
} from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";
import { validateSchema } from "../middlewares/validateSchema";
import { loginSchema, signupSchema } from "../schemas/user.schema";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/users.controller";

const router = Router();

router.route("/").get(requireAuth, getAllUsers).post(requireAuth, createUser);

router
  .route("/:id")
  .get(requireAuth, getUser)
  .delete(requireAuth, deleteUser)
  .patch(requireAuth, updateUser);

export default router;
