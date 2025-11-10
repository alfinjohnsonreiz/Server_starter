import { AppDataSource } from "../config/data-source"
import { User } from "../entities/User"

export const userRepo=AppDataSource.getRepository(User);
export const userAddService=()=>{
    
    userRepo.

}