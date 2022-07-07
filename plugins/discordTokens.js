"use strict";

// Main
function plugin(fs, chalk, log, file){
    const fileData = fs.readFileSync(file.fullname, "utf8")
    const tokens = fileData.match(/mfa\.\w+|(?!B.)\w+\.\w+\.[a-z][A-Z]\w+.\w+/gi)

    if(!tokens) return

    log(file.fullname, "Discord Tokens", tokens.join(", "))
}

module.exports = plugin