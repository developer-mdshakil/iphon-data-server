const express = require('express');
const cors = require('cors')
const app = express();

const phones = require('./phones.json');
const port = 5000;

app.use(cors());

app.get('/', (req, res)=> {
    res.send('My phone server data here!!!');
})

app.get('/phones', (req, res)=> {
    res.send(phones);
})

app.listen(port, ()=> {
    console.log(`Looking data for port: ${port}`)
})