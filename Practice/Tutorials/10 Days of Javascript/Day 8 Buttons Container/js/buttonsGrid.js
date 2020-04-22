var btn5 = document.getElementById('btn5');

console.log(document.getElementById('btn5'));

btn5.onclick = () => {
    // preserve button 4 value before overwriting it
    let prevbtn4 = btn4.innerHTML;
    btn4.innerHTML = btn7.innerHTML;
    btn7.innerHTML = btn8.innerHTML;
    btn8.innerHTML = btn9.innerHTML;
    btn9.innerHTML = btn6.innerHTML;
    btn6.innerHTML = btn3.innerHTML;
    btn3.innerHTML = btn2.innerHTML;
    btn2.innerHTML = btn1.innerHTML;
    btn1.innerHTML = prevbtn4;
};
