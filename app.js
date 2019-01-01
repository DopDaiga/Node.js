// import http module
//const http = require('http');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();  // accepts an array of reques handlers


const adminData = require('./routes/admin');  // importing Routes from admin & shop
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); //gives acess to the public folder

app.use(adminData.routes); // preceedence matters
app.use(shopRoutes);

// send a 404 Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
//const server = http.createServer(app);
//server.listen(5000);