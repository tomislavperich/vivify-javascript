var firstHuman = 'Alice';

function greetHuman() {
    // secondHuman variable is only accessible within function
    var secondHuman = 'Bob';

    document.write(`Hello ${firstHuman}<br>`);
    document.write(`Hello ${secondHuman}`);
}

document.write('Global scope:<br>');
greetHuman();

document.write('<br><br>Local scope:<br>');
document.write(`Hello ${firstHuman}`);
// Undefined
document.write(`Hello ${secondHuman}`);