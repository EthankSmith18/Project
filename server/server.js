const express = require("express");
const app = express();


const cors = require("cors");
app.use(cors(), express.json());

const connectDb = require('./config/mongoose.config');
connectDb();

const birdRouter = require('../server/routes/bird.routes');
app.use('/api/bird', birdRouter);


const PORT = 5001;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
