const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');
const { appPort } = require('./conts');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(router);

app.listen(appPort, () => {
    console.log('app ready on port: ', appPort);
});