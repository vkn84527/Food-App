
    

module.exports = app => {

    const api = require('../modules/controllers/token_api');
    const checkAuth = require('../middleware/checkAuth')

    //app.post('/order_product', checkAuth.customer, api.order_product)
    app.post('/token_order_product', checkAuth.customer,api.token )
    app.post('/token_order_product2', api.token )
    app.post('/check_order', api.check_bookings )

}

