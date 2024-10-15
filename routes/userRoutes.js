import express from express;

const route = express.Router();


route.get('/read',readAllUsers);
route.post('/create', createUser);
route.get('/read/:id', readUserById);
route.put('/update/:id', updateUser);
route.delete('/delete/:id', deleteUser);

export default route;