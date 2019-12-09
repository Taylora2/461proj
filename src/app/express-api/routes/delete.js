const request = require('request');
 
const json = {
    "cart_id": "5",
};
 
request.delete({
    url: 'http://localhost:3002/cart',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});