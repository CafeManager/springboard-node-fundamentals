const fs = require("fs");

    function cat(path) {
        fs.readFile(path, "utf-8", function (err, data) {
            console.log(data);
            if(err){
                console.log(err)
                process.exit(1)
            }
        });
    }


let input = process.argv[2];

try {
    cat(input);
} catch (err) {
    console.log("something went wrong");
    process.exit(1);
}
