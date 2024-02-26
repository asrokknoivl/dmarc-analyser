const express = require('express');
const app = express();

// routes
const dmarcRouter = require('./routes/dmarc.route')

// CORS config
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
   
}
app.use(cors(corsOptions))

// init routes
app.use('/api/dmarc', dmarcRouter);

app.listen(
    4000,
    () => {
        console.log('server is running on port 4000 hehehe');
    }
)