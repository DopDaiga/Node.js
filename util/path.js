const path = require('path');

// using the filename of the main module app 
module.exports = path.dirname(process.mainModule.filename); 