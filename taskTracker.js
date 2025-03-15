const fs = require('fs');

const filepath = 'data.json';

let jsonData = JSON.parse(fs.readFileSync(filepath,'utf-8'));

function add(task){
    fs.writeFileSync(filepath, task )
}

