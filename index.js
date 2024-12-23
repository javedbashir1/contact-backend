import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './lib/db.js';
import userRoutes from './route/userRoutes.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/',(req,res) =>{
    res.status(200).send('Welcome to backend')  
})

app.use('/user',userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Server is running`);
})

