const fs = require('fs')

const dmarcService = {
    async analyseReport(reportMetaData) {
        const file = fs.readFileSync(reportMetaData.path).toString();
        
    }
}

module.exports = dmarcService;