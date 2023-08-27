/**
 * App.ts
 * 
 * This is the main file for the server. It will handle all the routes and middlewares.
 * 
 * Author: Yahya Sungur
 * Date: 26.08.2023
*/

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

// accessible to any
app.use(cors());

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});

// routes
app.use('', require('./routes/app'));

// when invalid routes are entered
app.use(async (req, res) => {
    res.status(404).send(`Route is no where to be found.`);
});

export default app;
