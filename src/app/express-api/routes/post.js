const request = require('request');
 
const json = {
    "cart_id": "5",
    "item_id": "3",
};
 
request.post({
    url: 'http://localhost:8080/cart',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});