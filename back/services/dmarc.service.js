const fs = require('fs')
const xml2js = require('xml2js')


const dmarcService = {
    async convertReportXmlToJson(reportMetaData) {

        return new Promise((resolve, reject) => {
            fs.readFile(reportMetaData.path, 'utf-8', (err, xml) => {
                if (err) {
                    return reject(err);
                }
                xml2js.parseString(xml, (err, result) => {
                    if (err) {
                        console.error('Error parsing XML:', err);
                        return;
                    }
                    const json = JSON.stringify(result);
                    resolve(json);
                });
            });
        });
    }
}

module.exports = dmarcService;