import express from 'express';
import 'dotenv/config';
import crudRoute from './routes/crudRoute.js';
import  connection  from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
connection().then(()=>console.log("MongoDb Connected")).catch(err=> console.log(err));


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/crud", crudRoute);
app.listen(process.env.port);
