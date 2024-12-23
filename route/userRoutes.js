import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controller/userController.js';

const userRoutes = express.Router();


userRoutes.get('/',getUser)
userRoutes.post('/add', createUser);
userRoutes.delete('/delete/:id',deleteUser);
userRoutes.put('/update/:id', updateUser);

export default userRoutes