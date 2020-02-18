function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    var d = new Date(myDate);
    var dA = d.toString().split(' ');
//    console.log(d);
    var s = dA[0];
    s = (s == 'Tue') ? 'Tues' : (s == 'Wed') ? 'Wednes' : (s == 'Thu') ? 'Thurs' : (s == 'Sat') ? 'Satur' : s;
    console.log(s + 'day');
} 

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var dates = _input.split('\n');

    for (var i = 0; i < dates.length - 1; i++) {
        findDay(dates[i]);
    }
});
