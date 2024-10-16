import express from 'express';
import route from './routes/userRoutes.js';
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/api/users", route)
app.listen(port, (error) => {
    console.log(`Server running on port ${port}`)
})