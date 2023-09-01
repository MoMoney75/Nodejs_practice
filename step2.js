const fs = require('fs')
const process = require('process');
const axios = require('axios')

function cat(path){
fs.readFile(path, "utf8" , function(err,data) {
if(err){
    console.log(err)
    process.kill(1)
}
console.log(data)
})}

async function webcat(URL){
let response = await axios.get(URL)
    try{
    console.log(response)}

    catch(e){
        console.log(e)
    }
    }
        
let path = process.argv[2]










if(path.slice(0,4)  === 'http'){
    webcat(path)
}
else{
    cat(path)
}
    
