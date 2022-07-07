"use strict";

// Main
function plugin(fs, chalk, log, file){
    const fileData = fs.readFileSync(file.fullname, "utf8")
    const ips = fileData.match(/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/ig)

    if(!ips) return

    log(file.fullname, "IPs Finder", ips.join(", "))
}

module.exports = plugin