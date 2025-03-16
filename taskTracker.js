const fs = require('fs');
const readline = require('readline');

const data = JSON.parse(fs.readFileSync(data.json, 'utf-8'));

data.push({name:"ovindu", age:""})

fs.writeFileSync(filepath, "task" );
