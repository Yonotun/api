import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import 'dotenv/config';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

mongoose
.connect(process.env.DB_CONNECTION)
.then( () => console.log('connected to DB'))
.catch((error) => console.error(error));


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));