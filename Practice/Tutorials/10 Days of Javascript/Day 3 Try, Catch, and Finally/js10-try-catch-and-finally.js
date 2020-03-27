'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        // split into array
        let myS = s.split('');
        // arrays have reverse() method
        myS = myS.reverse();
        // arrays have join() method
        s = myS.join('');

    } catch (exception) {
        console.log(exception.message);
        // console.log("caught s:" + s);
    } finally {
        console.log(s)
    }

}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}