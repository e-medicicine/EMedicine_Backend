import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

//config environment variables
dotenv.config();

//alternative port
//const PORT = process.env.PORT || 6000;
const PORT = process.env.PORT || 8080;

//connect to database from config/db.js
connectDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

