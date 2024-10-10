import dotenv from "dotenv";
dotenv.config();

import  connectDB  from "./db/index.js";
import { app } from "./app.js";


const port = process.env.PORT || 5000;

connectDB()
.then( () => {
    app.listen( port, () => {
        console.log("Server is running at http://localhost:" + port )
    })
})
.catch( (err) => {
    console.log("MongoDB conneting error !!!", err)
})
