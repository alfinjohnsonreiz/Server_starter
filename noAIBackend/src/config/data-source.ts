import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource=new DataSource({
    type:'postgres',
    host:"localhost",
    port:5432,
    username:'myuser',
    password:'myuser123',
    database:'noAI',
    synchronize:true,
    logging:false,
    entities:[User]
    


})