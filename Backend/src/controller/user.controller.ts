import { Request, Response } from "express";
import { userAddService } from "../services/user.services";
import { ApiError } from "../utils/ApiError";

export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (!req.file) {
      console.log("Error in multer");
      res.status(404).json({ message: "Error in multer" });
    }

    const user = userAddService(name, email, req.file.path);
    if (!user) {
      throw new ApiError("Error in user", 400);
    }
    res
      .status(201)
      .json({ message: "File uplaodeed succes fully", user, file: req.file });
  } catch (error) {
    console.log(error);
  }
};
