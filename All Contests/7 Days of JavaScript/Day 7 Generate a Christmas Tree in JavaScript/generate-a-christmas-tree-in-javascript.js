function processData(input) {
    //Enter your code here
    console.log(' '.repeat(8) + '*');
    for (let i = 8, j = 1; i >= 0; --i, j += 2)
        console.log(' '.repeat(i) + '0'.repeat(j))
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
