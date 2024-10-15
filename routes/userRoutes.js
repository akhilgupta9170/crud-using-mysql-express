import express from "express";
import { readAllUsers, createUser, readUserById, updateUser, deleteUser } from "../controllers/userController.js";

const route = express.Router();


route.get('/read',readAllUsers);
route.post('/create', createUser);
route.get('/read/:id', readUserById);
route.put('/update/:id', updateUser);
route.delete('/delete/:id', deleteUser);

export default route;