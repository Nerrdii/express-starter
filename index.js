const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, () =>
  console.log('Connected to MongoDB')
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/api/items', require('./routes/api/items'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
