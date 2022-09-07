import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT;
const HOST = process.env.HOST;

import connectDB from './config/db.js';

connectDB();

import { router as allPostsRouter } from './routes/PeepRoutes.js';
import { router as UserRouter } from './routes/UserRoutes.js';

import errorHandler from './middleware/errorMiddleware.js';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', allPostsRouter);
app.use('/user', UserRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at ${process.env.HOST}:${process.env.PORT}`)
});

export default app;