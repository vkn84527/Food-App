var express = require("express");
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({ message: "Welcome,Server is working Fine.........  " });

});
const port = process.env.PORT || 3000
require('./database/db_connection')
require("./routes/customer_route")(app);
require("./routes/merchant_route")(app);
require("./routes/booking_route")(app);
require("./routes/external_api")(app);

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});

