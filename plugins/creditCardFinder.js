"use strict";

// Main
function plugin(fs, chalk, log, file){
    const fileData = fs.readFileSync(file.fullname, "utf8")
    const creditCards = fileData.match(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g)

    if(!creditCards) return

    log(file.fullname, "Credit Card Finder", creditCards.join(", "))
}

module.exports = plugin