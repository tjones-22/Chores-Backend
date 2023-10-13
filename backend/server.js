const choreRoutes = require("./choreRoutes");
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use( (req,res,next) =>{
    console.log(req.path, req.method);
    next();
})

app.get("/", (req,res) => {
res.json({mssg: "Use /api to get the api data"})
});


app.use('/api',choreRoutes);

app.listen(process.env.PORT , () => {
console.log('Running');
})