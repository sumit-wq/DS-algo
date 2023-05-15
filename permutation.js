function permutations(n) {
    return n!==1? n*permutations(n-1): n;
}

console.log(permutations(4));

function permute(str, result = "") {
    if(str.length === 0) {
        console.log(result);
    }
    for(let i = 0; i < str.length; i++) {
        let rest = str.substring(0,i)+str.substring(i+1);
        permute(rest, result+str[i]);
    }
}
permute("let");


function permuteArr(arr, result=[]) {
    if(arr.length === 0) {
        console.log(result);
    }
    for(let i = 0; i < arr.length; i++) {
        let rest = arr.slice(0,i).concat(arr.slice(i+1));
        permuteArr(rest, result.concat(arr[i]))
    }
}

permuteArr([1,2,3, 4]);

/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 */

function combinations(n, k) {
    let output = [];
    function findCombinations(start, combos = []) {
        if(combos.length === k) {
            output.push([...combos]);
        }
        if(combos.length > k) return;

        for(let i = start; i <= n; i++) {
            combos.push(i);
            findCombinations(i+1, combos);
            combos.pop();
        }
    }
    findCombinations(1,[]);
    return output;
   
}

console.log(combinations(4,2))
