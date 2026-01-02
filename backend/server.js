const express = require('express');
const app = express();


app.use(express.json());


app.get("/", (req,res) => {
    res.send("this is home page");
})


app.listen(3000, () => {
    console.log("server is runing at port 3000");
})