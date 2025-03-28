
const data = {};

async function pushdata(key, value) {
    data[key] = { value};
}

pushdata("01","val")
pushdata("02","val2")

Object.entries(data).forEach(([key,item]) => {
    console.log(key);
})

async function finddata(key){
    
}
