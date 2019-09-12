const {dialogflow} = require('actions-on-google');
const express = require('express');
const {createHandler} = require('azure-function-express');
const app = dialogflow();
app.intent('Default Welcome Intent', conv => {
    conv.close('Hello, Azure!');
});
// Put other intent handlers here.
const expressApp = express();
expressApp.post('/api/diagflowfnapp', app);
module.exports = createHandler(expressApp);