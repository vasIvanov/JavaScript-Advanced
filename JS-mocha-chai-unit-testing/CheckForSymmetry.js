function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    for(let i = 0;i<arr.length;i++){
        if(arr[i] != reversed[i]){
            return false;
        }
    }
    return true;
}

module.exports = isSymmetric;