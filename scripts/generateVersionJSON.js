const childProcess = require('child_process');
const fs = require('fs');

const packageJSON = require('../package.json');


const outFilename = './version.json';

const versionJSON = {
    source: 'https://github.com/mozilla/fhwr-unflattener',
    version: packageJSON.version,
    commit: process.env.SOURCE_VERSION || childProcess.execSync('git rev-parse HEAD').toString().trim(),
};

fs.writeFile(outFilename, JSON.stringify(versionJSON, null, 4), error => {
    if (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    } else {
        // eslint-disable-next-line no-console
        console.log('Wrote ' + outFilename);
    }
});
