const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require('./routes/product.route.js');

//MiddleWares
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/products',productRoute);

//Home Page
app.get("/", (req, res) => {
  res.send("Hello from Node API Updated");
});

//Connecting to the DataBase -->
mongoose
  .connect(
    "mongodb+srv://vanshnanda:XCKo9YoHA05LOaYp@backenddb.qtkio.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000...`);
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
