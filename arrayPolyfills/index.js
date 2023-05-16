let arr = [1,2,3,4,5,6];
let result1 = arr.filter(item => item%2);

Array.prototype.myFilter = function(callback) {
    if(this.length === 0 || !Array.isArray(this)) {
        throw new Error('Invalid array passed');
    }
    let newArray = [];
    for(let i = 0; i< this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }   
    }
    console.log(newArray);
    return newArray;

}

console.log(arr.myFilter(item => item < 6));


Array.prototype.myMap = function(callback) {
    if(this.length === 0 || !Array.isArray(this)) {
        throw new Error('Invalid array passed');
    }
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

console.log(arr.myMap(item => item +2));

Array.prototype.myReduce = function(callback, initialValue) {
    if(this.length === 0 || !Array.isArray(this)) {
        throw new Error('Invalid array passed');
    }
    let isInitialValue = initialValue !== undefined;
    let result = isInitialValue ? initialValue : this[0];

    for(let i = isInitialValue ? 0 : 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

console.log(arr.myReduce((acc, cur) => acc+cur, 0));