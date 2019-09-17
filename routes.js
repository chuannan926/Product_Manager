const controller = require("./controller");
var path = require("path");

module.exports = function(app){
    app.get('/api/products', controller.index)
    app.post('/api/new_products', controller.new_product)

    app.get('/api/:id', controller.one_product)
    app.patch('/api/edit/:id', controller.update_product)

    app.delete('/api/delete/:id',controller.delete_product)
}