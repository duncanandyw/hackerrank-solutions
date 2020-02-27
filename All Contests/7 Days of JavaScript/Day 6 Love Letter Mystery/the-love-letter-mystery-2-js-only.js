function isPalindrome(s) {
// following two lines will work for this func, but timeout / take too long
//    let t = s.split('').reverse().join('');
//    return s.localeCompare(t) === 0 ? true : false;
    let n = s.length;
    for (let i = 0, j = n; i < n; ++i, --j)
        if (s[i].localeCompare(s[j]) != 0)
            return false;
//    else
    return true;
}

// compare first and last, decrement until match
function findPalindrome(s) {
        let len = s.length - 1;
        return isPalindrome(s) ? 0 : Math.abs(s.charCodeAt(len) - s.charCodeAt(0)) 
        + findPalindrome(s.slice(1, (len))); 
    // basically s.length - 2, since slice returns val prior to end index
}

function processData(input) {
    //Enter your code here
    A = input.split(/\s/);
    let n = A[0];
    for (let i = 1; i <= n; ++i)
        isPalindrome(A[i]) ? console.log(0) : console.log(findPalindrome(A[i].trim()));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
