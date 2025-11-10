import { DataSource } from "typeorm";

export const AppDataSource=new DataSource({
    type:'postgres',
    host:"localhost",
    port:5432,
    username:'myuser',
    password:'myuser123',
    database:'noAI',
    synchronize:true,
    logging:false,
    entities:[]
    


})