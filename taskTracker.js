const fs = require('fs');

const filepath = 'data.json'

async function loaddata(){
    try{
        let data = await JSON.parse(fs.readFileSync(filepath, 'utf-8'));
        return data;
    }catch(err){
        console.error(err);
        return [];
    }
}

async function savetask(data){
    
    try{
        fs.writeFile(filepath, JSON.stringify(data, null, 2),'utf-8');
    }catch(err){
        console.error(err);
    }
}

async function updatetask(id,newname) {

    let data = await loaddata();
    let status = false;

    data = data.map(item => {
        if(item.id === id){
            status = true;
            return { ...item, name: newname};
        }
        return item;
    })

    if(status === true){
        await savetask(data);
        console.log("test"+data)
    }
    
}

// savetask();

updatetask(1,"john");


