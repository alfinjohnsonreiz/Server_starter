import app from './app';
import { AppDataSource } from './config/data-source';

const PORT = 3400;

AppDataSource.initialize()
.then(()=>{
    console.log("Database connected");

    app.listen(PORT,()=>{
              console.log(`Server running on address http://localhost:${PORT}`);

    })
})
.catch(()=>{
    console.log("Error on database connection")
})