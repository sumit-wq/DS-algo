const flattenArr = (array, result = []) => {
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            flattenArr(array[i], result)
        } else {
            result.push(array[i]);
        }
    }
    return result;
}
const arr = [1,2,[3,[4,[5,[6]]]]]
console.log(flattenArr(arr));
console.log(arr.flat())


const flattenObj = (obj, parent="", result={}) => {
    for(let key in obj) {
        let parentKey = parent+"_"+key;
        if(typeof obj[key] === "object") {
            flattenObj(obj[key], parentKey, result);
        } else {
            result[parentKey] = obj[key];
        }
    }
    return result;
}

const dummyObj = {
    name: "Sumit",
    age: 20,
    address: {
        city: "Bangalore",
        state: "Karnataka",
        location: {
            lat: "30",
            lon: "99"
        }
    },

}

console.log(flattenObj(dummyObj, "dummyObj"))