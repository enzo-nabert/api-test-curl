const express = require('express');
const app = express();

app.use(express.json);

app.get('/', (req,res) => {
    res.json({
        code: 200,
        msg: "OK"
    })
});

app.post('/', (req,res) => {
    res.json(req.body);
})


app.listen(4000,() => {
    console.log("running on 4000")
})