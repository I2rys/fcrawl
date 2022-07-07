"use strict";

// Main
function plugin(fs, chalk, log, file){
    const fileData = fs.readFileSync(file.fullname, "utf8")

    if(fileData.indexOf("SQLite format") !== -1) log(file.fullname, "SQLite Files Finder", "SQLite file found.")
}

module.exports = plugin