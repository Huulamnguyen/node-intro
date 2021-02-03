const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error Reading ${path}: ${error}`);
            process.exit(1);
        }
        console.log(data);
    })
}

async function webCat(path) {
    try {
        let res = await axios.get(path);
        console.log(res.data);
    } catch (err) {
        console.log(`Error Fetching ${path}: ${err}`);
        process.exit(1);
    };

};

let path = process.argv[2];
if (path.slice(0,4) === "http"){
    webCat(path);
} else {
    cat(path);
}