import express, { Request, Response } from "express";
import { upload } from "../config/multer";
import { RegisterUser } from "../controller/user.controller";
import { validateBody } from "../middleware/body.validator";
import { userSchema } from "../validations/user.validation";

const router = express.Router();

router.post("/", upload.single("image"), validateBody(userSchema),RegisterUser);

export default router;
