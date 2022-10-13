const express = require('express')
const app = express();
app.use("/", (req, res) => {
    res.send('hello')
})
app.get("https://api.github.com/users/Susmita549", (req, res) => {
    console.log(res)
    res.send(res)
});
app.listen(8080, () => {
    console.log('started server...');
})