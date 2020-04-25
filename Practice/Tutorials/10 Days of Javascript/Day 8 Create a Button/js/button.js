/* Create a button element */
var btn = document.createElement('button');

/* Set the button's text label */
btn.innerHTML = '0';

/* Set the button's id */
btn.id = 'btn';

/* Add the button to the page */
document.body.appendChild(btn);

/* This sets the action to perform on a click event */
btn.onclick = () => {
    /* This changes the button's label */
    btn.innerHTML++;
};
