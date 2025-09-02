import express from 'express';
import { PORT } from "./config.js";
import userRoutes from "./routes/users.routes.js";
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('dev'))
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(userRoutes);

app.listen(PORT)
console.log("server on port", PORT)
