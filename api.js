const express = require('express');
const path = require('path');
const exp = require('constants');
const api = express();
api.use(express.static(path.join(__dirname, 'public')));
api.use('/', express.static('index.html'));

// api.listen(3000);

module.exports = api;