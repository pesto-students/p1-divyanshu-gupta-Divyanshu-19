//function takes array and return true if array contains duplicate else return false.

function hasDuplicatie(array){
    const set = new Set(array);
    return set.size!==array.length;
}

console.log(hasDuplicatie([1,1,1,2,3]))
console.log(hasDuplicatie([1,2,3]))
