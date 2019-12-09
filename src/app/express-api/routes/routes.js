
//const categories = [{id: 1,name: "food",},{id: 2,name: "supplies"}];
//replace with
// Load the MySQL pool connection
const pool = require('../data/config'); //<-from config.js



const router = myapp => { 
    //empty tester get
    myapp.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    }),
    myapp.get('/cart', (request, response) => {
        pool.query('SELECT * FROM cart', (error, result) => {
            if (error) throw error;
     
            response.send(result);
        });
    }),

    //display all category names
    myapp.get('/categories', (request, response) => {
        pool.query('SELECT cat_name FROM categories', (error, result) => {
            if (error) throw error;
     
            response.send(result);
        });
    }),

    // Display items by cat_id
    myapp.get('/items/:cat_id', (request, response) => {
        const cat_id = request.params.cat_id;

        pool.query('SELECT item_name FROM items WHERE cat_id = ?', cat_id, (error, result) => {
            if (error) throw error;
 
            response.send(result);
        });
    }),

    // Add an item to cart table
    myapp.post('/cart', (request, response) => {
        pool.query('INSERT INTO cart SET ?', request.body, (error, result) => {
            if (error) throw error;
 
            response.status(201).send(`item added to cart.`);
        });
    }),

    // Delete 
    myapp.delete('/cart/:cart_id', (request, response) => {
        const cart_id = request.params.cart_id;
 
        pool.query('DELETE * FROM cart WHERE cart.cart_id = ?', cart_id, (error, result) => {
            if (error) throw error;
 
            response.send('Deleted all items from cart');
        });
    }),

    // Update an existing 
    myapp.put('/cart/:cart_id', (request, response) => {
        const cart_id = request.params.cart_id;
 
        pool.query('UPDATE cart SET ? WHERE cart_id = ?', [request.body, cart_id], (error, result) => {
            if (error) throw error;
 
            response.send('Cart updated');
        });
    });


}







module.exports = router;