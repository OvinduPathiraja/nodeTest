
const data = {};

async function pushdata(key, value) {
    data[key] = { value};
}

pushdata("01","val")
pushdata("02","val2")

async function finddata(val){
    Object.entries(data).forEach(([key, item]) =>{
        if(key === val){
            console.log(item.value)
        }
    })
}



async function updateData(val, update){
    Object.entries(data).forEach(([key, item]) =>{
        if(key === val){
            data[key] = {value:update}
        }
    })
}

async function updateData2(val, update) {
    if(data[val]){
        data[val].value = update
    }
}

updateData2("01","val3")

finddata("01")