const express = require('express');
const app = express();
const connectDb = require('./config/database');
const showRoutes = require("./routes/show.routes");

app.use("/api/shows", showRoutes);


//conect to databse

connectDb();


app.use(express.json());


app.get("/", (req,res) => {
    res.send("this is home page");
})


app.listen(3000, () => {
    console.log("server is runing at port 3000");
})