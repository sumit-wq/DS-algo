/**
 * Given any string value rearrange them in such a way that adjacent characters are not same.
 * If the solution is not possible return "Not Possible"
 * @param {*} str 
 */

function rearrange(str) {
	let hashMap = {}
	for(let i = 0; i<str.length; i++) {
  	if(hashMap[str[i]]) {
    	hashMap[str[i]] = hashMap[str[i]]+1;
    } else {
    	hashMap[str[i]] = 1;
    }
  }
	let arr = Object.entries(hashMap).sort((a,b) => b[1]-a[1]);
	if(arr[0][1] > Math.floor(str.length +1)/2) {
  	console.log("Not possible")
  } else {
  	generateRearrange(arr, str.length)
  }
	
}
function generateRearrange(arr, len) {

	let result = []
	for(let i = 0; i<len;i++) {
  	if(i%2 === 0) {
    	result.push(arr[0][0]);
			arr[0][1] = arr[0][1] -1;
	if(arr[0][1] === 0) {
			arr.splice(0,1);
}
			
    } else {
    	result.push(arr[arr.length-1][0])
	arr[arr.length-1][1] = arr[arr.length-1][1] -1;
	if(arr[arr.length-1][1] === 0) {
  	arr.splice((arr.length-1),1);
  }
    }
  }
console.log(result.join(""))
}
rearrange("caabbcaa");
rearrange("caabbcaaaa");