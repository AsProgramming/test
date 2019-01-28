const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();

const port = 3000;

app.get('/',(req, res)=>{
    res.send('test');
});

app.listen(port,()=>{
    console.log('Server side started');
});