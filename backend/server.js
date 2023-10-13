
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
const choreRoutes = require("./choreRoutes");
app.use(express.json())
app.use( (req,res,next) =>{
    console.log(req.path, req.method);
    next();
})

app.use('/api',choreRoutes);

app.listen(process.env.PORT , () => {
console.log('Running');
});