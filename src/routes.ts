import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";

import ControllerPost from "./controllers/PostController";
import UserController from "./controllers/UserController";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/post", upload.array("images"), ControllerPost.create);
routes.get("/posts", ControllerPost.show);

routes.post("/user", UserController.create);
routes.get("/user/:id_user", UserController.index);
routes.get("/users", UserController.show);

export default routes;
