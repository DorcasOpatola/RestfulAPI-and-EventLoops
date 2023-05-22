const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;



app.use(bodyParser.urlencoded({extended: true}));

app.get('/user/:name/:age/:sex', (req, res) => {
    const {name, age, sex} = req.params;
    const user = {name, age, sex};
    res.json(user);
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

