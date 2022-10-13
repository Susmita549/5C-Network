const express = require('express')
const app = express();
require("dotenv").config();
const connection = require("./config/db");
const githubRouter = require("./routes/github");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/", (req, res) => {
//     res.send('hello')
// })
app.use("/api", githubRouter);
app.listen(8080, async() => {
    try {
      await connection;
      console.log("connection establish successfully");
    } catch {
      console.log("connection failed");
    }
    console.log("Server strated successfully...");
})