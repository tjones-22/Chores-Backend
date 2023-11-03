
const choreRoutes = require("./choreRoutes");
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();


const initialKids = [
    { id: 1, name: 'Tristan' },
    { id: 2, name: 'Brecka' },
    { id: 3, name: 'Brynlee' },
    { id: 4, name: 'Tyson' },
    { id: 5, name: 'Brockton' },
 
  ];
  
  const initialFamily = [
    { id: 1, name: 'Tristan' },
    { id: 2, name: 'Brecka' },
    { id: 3, name: 'Brynlee' },
    { id: 4, name: 'Tyson' },
    { id: 5, name: 'Brockton' },
    { id: 6, name: 'Dad' },
    { id: 7, name: 'Mom' }
  ];

  


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


app.get("/members/family", (req,res) => {
    res.json({member:initialFamily})
});

app.get("/members/kids", (req,res) => {
res.json({member:initialKids})
});


app.listen(process.env.PORT, () => {
  console.log('Running');
  
 
});

