const express = require('express');
const dmarcRouter = express.Router();
const dmarcService = require('../services/dmarc.service')

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

dmarcRouter.post(
    '/analyse',
    upload.single('file'),
    (req, res) => {
        dmarcService.analyseReport(req.file);
        res.sendStatus(200);
    }
)

module.exports = dmarcRouter;