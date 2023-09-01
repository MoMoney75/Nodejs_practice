const fs = require('fs')
const process = require('process');
const axios = require('axios')

function handleOutPut(str,output){
    if(output){
        fs.writeFile(output,str,'utf8',(e)=>{
            if(e){
                console.log(e)
                process.exit(1)
            }
            
        })
    } else{console.log(str)}
}

function cat(path){
fs.readFile(path, "utf8" , function(err,data) {
if(err){
    console.log(err)
    process.kill(1)
}
else{handleOutPut(data,output)}
});
}

async function webcat(URL){
let response = await axios.get(URL)
    try{
    handleOutPut(response,output)}

    catch(e){
        console.log(e)
    }
    }
        
let path;
let out;

if(process.argv[2] === "--output"){
    output = process.argv[3];
    path = process.argv[4];
}
else{path = process.argv[2];}


if(path.slice(0,4)  === 'http'){
    webcat(path)
}
else{
    cat(path)
}
    
