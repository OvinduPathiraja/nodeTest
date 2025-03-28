
const data = {};

async function pushdata(key, value) {
    data[key] = {value};
}

pushdata("01","val")
pushdata("02","val2")

Object.values(data).forEach(item => {
    console.log(item.value);
})
