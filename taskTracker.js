const fs = require('fs');

const filepath = 'data.json';

let jsonData = JSON.parse(fs.readFileSync(filepath,'utf-8'));

fs.writeFileSync(filepath, task );

add("test")