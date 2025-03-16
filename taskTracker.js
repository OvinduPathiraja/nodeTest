const fs = require('fs');
const readline = require('readline');

const data = JSON.parse(fs.readFileSync(data.json, 'utf-8'));

data.push({name:"ovindu", age:"22"})

fs.writeFileSync(data.json, JSON.stringify(data, null, 2),'utf-8');


