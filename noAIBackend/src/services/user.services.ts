import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export const userRepo = AppDataSource.getRepository(User);

export const userAddService = async(name: string, email: string, image: string) => {
  const user=userRepo.create({
    name,
    email,
    image,
  });
   await userRepo.save(user)
};
