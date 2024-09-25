const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//Route to get weather data
app.get(`/api/weather/:city`, async (req, res) =>{
    const{city}=req.params;
    const apiKey=process.env.api_key;
})