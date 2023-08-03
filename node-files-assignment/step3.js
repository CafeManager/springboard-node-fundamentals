const fs = require("fs");
const axios = require("axios");

function cat(path, flag = "", filePath= "") {
    let success
    if(flag == '--out'){
        fs.readFile(path, {encoding: "utf-8"}, function (err, data) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log(data);
            fs.writeFile(filePath, data, { encoding: "utf-8", flag: 'a'}, function (err, data) {
                
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log(data);
                success = true
                return success
            });

        });
        

    } else {
    fs.readFile(path, {encoding: "utf-8"}, function (err, data) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(data);
        success = true
        return success

    });
    
}
}

async function webCat(url, flag = "", filePath = "") {
    let success;
    if(flag == '--out'){
        try {
            let data = await axios.get(url).then((res) => {
                fs.writeFile(filePath, res.data, {encoding: "utf-8", flag: 'a'}, function (err, data) {
                    if (err) {
                        console.log(err);
                        process.exit(1);
                    }
                });
            });
        } catch (err ){
            console.log("err:", err)
        }
        success = true
    } 
    try {
        let data = await axios.get(url).then((res) => res.data);
        success = true
    } catch (err) {
        console.error(
            `Error fetching ${url} \n Error: Request failed with status code ${err.code}`
        );
    }

    return success
}

async function processCommand(){
    if(process.argv[2] == '--out'){
        let outputFile = process.argv[3];
        let type = process.argv[4]
        let fileOrUrl = process.argv[5];
        if(type == 'file'){
            cat(fileOrUrl, process.argv[2], filePath=outputFile)
        } 
        else if(type == 'web'){
            webCat(fileOrUrl, process.argv[2], filePath=outputFile)
        }
    } else {
    let type = process.argv[2];
    let input = process.argv[3];
    
        if (type == "file") {
            cat(input);
        } else if (type == "web") {
            webCat(input);
        }
    }
}

processCommand()


