const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const countController = require('./controllers/countController');

const PORT = 3000;

mongoose.connect('mongodb://chris:password123@ds125001.mlab.com:25001/whatever-i-want', () => console.log('Connected to mLabs'));

app.use(express.static(path.join(__dirname, 'public')));

app.put('/increase', countController.increaseCount);

app.get('/getcount', countController.getCount);

app.listen(PORT, () => console.log(`listening on... ${PORT}`));
