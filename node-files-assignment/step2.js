const fs = require("fs");
const axios = require("axios");

function cat(path) {
    fs.readFile(path, "utf-8", function (err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            process.exit(1);
        }
    });
}

async function webCat(url) {
    try {
        let data = await axios.get(url).then((res) => res.data);
    } catch (err) {
        console.error(
            `Error fetching ${url} \n Error: Request failed with status code ${err.response.status}`
        );
    }
}

let type = process.argv[2];
let input = process.argv[3];

if (type == "file") {
    cat(input);
} else if (type == "web") {
    webCat(input);
}
