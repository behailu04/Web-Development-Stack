const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Body-parser middleware

app.use(bodyparser.json());

// DB config

const db = require('./config/config');

// Connect to Mongo
mongoose.connect(db.db_dev).then(()=> console.log('MongoDB connected..'));
mongoose.Promise = global.Promise;

// Use routes
app.use('/api/items', items); 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

