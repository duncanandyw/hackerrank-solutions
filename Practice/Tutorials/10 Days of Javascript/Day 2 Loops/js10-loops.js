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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var letters = s.split(new RegExp("[\S]?"));
    var vowels = ''
    var consonants = '';
//    console.log(letters);

    for(var loneLetter of letters)
        if (loneLetter == 'a'
            || loneLetter == 'e'
            || loneLetter == 'i'
            || loneLetter == 'o'
            || loneLetter == 'u')
                vowels += (loneLetter + '\n');
        else
            consonants += (loneLetter + '\n');

            console.log(vowels + consonants);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}