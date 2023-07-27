import express from 'express';
import cartsRouter from './routes/carts.router.js';
import productsRouter from './routes/products.router.js';



const app = express();
const PORT = 8080;


//Armado para Postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


app.listen(PORT, ()=>{console.log('----Listening on 8080----')});

