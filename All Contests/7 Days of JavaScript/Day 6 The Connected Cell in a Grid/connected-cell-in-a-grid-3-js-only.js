
// i / m rows, j / n columns
function flood(Grid, row, col) {
    if (row < 0 || col < 0 || row >= m || col >= n)
        return 0;

    // else
    if (Grid[row][col] == 1) {
        Grid[row][col] = 0;

        return 1 
        + flood(Grid, row, col + 1) // e
        + flood(Grid, row + 1, col + 1) // se
        + flood(Grid, row + 1, col) // s
        + flood(Grid, row + 1, col - 1) // sw
        + flood(Grid, row, col - 1) // w
        + flood(Grid, row - 1, col - 1) // nw
        + flood(Grid, row - 1, col) // n
        + flood(Grid, row - 1, col + 1) // ne
        ;
    }

    return 0;
}

var m;
var n;

function processData(input) {
    //Enter your code here
    var Grid = input.trim().split(/\r?\n/);
    m = parseInt(Grid[0]);
    n = parseInt(Grid[1]);
    Grid = Grid.slice(-(Grid.length - 2)).map(e => e.trim().split(' ').map(Number));

    let max = 0, test = 0;
    for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
            test = flood(Grid, i, j);
            if (test > max)
                max = test;
        }
    }

    console.log(max);
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
