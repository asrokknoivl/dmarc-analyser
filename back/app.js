const express = require('express');
const app = express();

app.get(
    '/',
    (req, res) => {
        res.send(
            {
                hello: "world"
            }
        );
    }
)

app.post(
    '/upload',
    (req, res) => {
        console.log(req)
    }
)

app.listen(
    3000,
    () => {
        console.log('server is running on port 3000');
    }
)