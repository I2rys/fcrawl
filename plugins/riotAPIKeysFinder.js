"use strict";

// Main
function plugin(fs, chalk, log, file){
    const fileData = fs.readFileSync(file.fullname, "utf8")
    const riotAPIKeys = fileData.match(/RGAPI-\w+-\w{4}-\w{4}-\w{4}-\w+/gi)

    if(!riotAPIKeys) return

    log(file.fullname, "Riot API keys finder", riotAPIKeys.join(", "))
}

module.exports = plugin