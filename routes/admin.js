
const path = require('path');

const express = require('express');

const rootDir = require('../util/path'); // import the path

const router = express.Router();

// add a variable to stoer elements
const products = [];


// /admin/add-product  => GET
router.get('/add-product', (req, res, next) => {  
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); 

// /admin/add-product  => POST
router.post('/add-product', (req, res, next) => { 
    products.push({title: req.body.title});
    res.redirect('/');
});

// module.exports = router;
// export new routes
exports.routes = router;
exports.products = products;