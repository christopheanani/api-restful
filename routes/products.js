// const express = require ('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: ' Handling GET requests to /products'
//     })
// });

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: ' Handling POST requests to /products'
//     })
// });
// module.exports = router;




// Imports de express
const express = require ('express');

// Instantiate server
const app = express();

// Configure routes
//server.get('/', function (req, res){
   // res.setHeader('Content-Type', 'test/html');
    //res.status(200).send ('<h1>Bienvenu sur mon serveur</h1>')
//});

// Launch server
app.listen(8080,()=>{
    console.log('It work');
});


// const express = require('express');
// const app = express();

// const productRoutes = require('./routes/products');

// app.us('/products', productRoutes);

// module.exports = app;