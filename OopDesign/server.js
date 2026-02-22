import app from "./src/app.js";
import { connectDb } from "./src/config/db.config.js";

const port = 3000;
connectDb();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})