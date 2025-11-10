import { Request, Response } from "express";

export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (!req.file) {
      console.log("Error in multer");
      res.status(404).json({ message: "Error in multer" });
    }

    res
      .status(201)
      .json({ message: "File uplaodeed succes fully", file: req.file });
  } catch (error) {
    console.log(error);
  }
};
