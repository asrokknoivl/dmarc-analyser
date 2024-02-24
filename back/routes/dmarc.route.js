const express = require('express');
const dmarcRouter = express.Router;
const dmarcService = require('../services/dmarc.service')

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

dmarcRouter.post(
    '/upload',
    upload.single('file'),
    (req, res) => {
        dmarcService.analyseReport(req.body);
        res.sendStatus(200);
    }
)

module.export = dmarcRouter;