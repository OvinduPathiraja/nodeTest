
const data = {};

async function pushdata(key, value) {
    data[key] = { value};
}

// pushdata("01","val")
// pushdata("02","val2")

Object.entries(data).forEach(([key,item]) => {
    console.log(key);
})

async function finddata(val){
    Object.entries(data).forEach(([key, item]) =>{
        console.log(key + " " + val);
        if(key === val){
            console.log(item.value)
        }
    })
}

finddata("01")