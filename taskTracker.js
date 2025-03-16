const fs = require('fs');
const jsonUpdate = require('json-update');

const filepath = 'data.json'

let data;

try{
    data = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}catch(err){
    console.error(err);
    return;
}

async function addtask(){
    
    data.push({name:"sumu", age:"25"});
    
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2),'utf-8'),(err)=>{
        if(err){
            console.error("write error "+err);
        }
    };
}

async function updatetask() {
    
}

addtask();


