const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://lucasw:admin@cluster0-mqscv.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.listen(8080);