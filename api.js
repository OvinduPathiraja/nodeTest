
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


finddata("02")

async function updateData(val){
    Object.entries(data).forEach(([key, item]) =>{
        if(key === val){
            data []
        }
    })
}