function processData(input) {
    //Enter your code here
    
    let A = input.split(/\s/).map(Number); // so we don't need to parseInt all over
    let funds = A[1];
    let B = A.slice(-(A.length - 2)); // negative value offsets from end of array
    B.sort((a, b) => a - b );
    let total = 0;
    for (var count = 0; total < funds; ++count) // test #16 is over by one when this tested as <=
        total += B[count];

    console.log(--count);
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
`