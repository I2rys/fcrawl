"use strict";

// Main
function plugin(fs, chalk, log, file){
    if(file.fullname.match(/.sql$/)) log(file.fullname, "SQL Files Finder", "SQL file found.")
}

module.exports = plugin