function processData(myArray) {
//    console.log(myArray);
    myArray.sort( function(a, b) { return b - a; });
//    myArray.reverse();
//    console.log(myArray);
    for (var i = 1; i < myArray.length; ++i) {            
        if (myArray[i - 1] > myArray[i] && myArray[i - 1] != myArray[i]) {
            console.log(myArray[i]);

            break;
        }
    }
}



// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
