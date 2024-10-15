import express from 'express';
import bodyParser from 'body-parser';
import route from './routes/userRoutes.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use("/api/users", route)
app.listen(port,(error)=>{
    console.log(`Server running on port ${port}`)
})