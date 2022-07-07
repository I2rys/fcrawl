(async()=>{
    "use strict";

    // Dependencies
    const rra = require("recursive-readdir-async")
    const chalk = require("chalk")
    const fs = require("fs")
    
    // Variables
    const plugins = fs.readdirSync("./plugins").map((plugin)=> `./plugins/${plugin}`)
    const args = process.argv.slice(2)

    // Functions
    function log(filePath, pluginName, message){
        console.log(`${chalk.blueBright(filePath)}${chalk.gray("|")}${chalk.redBright(pluginName)}: ${message}`)
    }
    
    // Main
    if(!args.length) return console.log("usage: node index.js <directory>")

    const files = await rra.list(args[0], { recursive: true, realPath: true })

    if(!files.length) return console.log("No files found in the directory.")

    for( const file of files ) for( const plugin of plugins ) require(plugin)(fs, chalk, log, file)

    console.log()
    console.log("Finished!")
})()