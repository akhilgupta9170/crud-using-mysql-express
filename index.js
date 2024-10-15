import express from 'express';
import bodyParser from 'body-parser';
import route from './routes/userRoutes.js';


const app = express();
app.use(bodyParser.json());
app.use("/api/users", route)
app.listen(port,(error)=>{
    console.log(`Server running on port ${port}`)
})