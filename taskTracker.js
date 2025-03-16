const fs = require('fs');
const readline = require('readline')

const filepath = 'data.json';

const data = fs.readFileSync(filepath)

fs.writeFileSync(filepath, "task" );
