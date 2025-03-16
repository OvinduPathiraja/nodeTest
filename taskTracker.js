const fs = require('fs');
const readline = require('readline')

const filepath = 'data.json';

const data = JSON.parse(fs.readFileSync(filepath, 'utf-8'));



fs.writeFileSync(filepath, "task" );
