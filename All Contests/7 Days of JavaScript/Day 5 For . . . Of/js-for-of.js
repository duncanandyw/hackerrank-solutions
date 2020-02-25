//Write your code below this line.
'use strict';

for(let i of my_array){
    let j = i.split('').reverse('').join('');
    if (i === j)
        console.log(i);
}
