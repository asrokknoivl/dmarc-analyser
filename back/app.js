const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

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
    upload.single('file'),
    (req, res) => {
        console.log(req.file);
        res.sendStatus(200);
    }
)

app.listen(
    3000,
    () => {
        console.log('server is running on port 3000');
    }
)