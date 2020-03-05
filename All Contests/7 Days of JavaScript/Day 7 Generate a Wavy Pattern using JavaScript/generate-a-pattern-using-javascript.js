function processData(input) {
    //Enter your code here
    let pyr = '\/\\';
    let rows = 14;
    let cols = 7;
    for (let i = 0; i < rows; ++i) {
        console.log('\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572');
    }
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
