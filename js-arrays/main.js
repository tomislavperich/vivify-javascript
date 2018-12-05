// Single-dimensional array
var food = ['pizza', 'bacon', 'pancakes'];
document.write('Single-dimensional:<br>');
food.forEach(item => {
    document.write(`${item}<br>`);
});
document.write('<br>');

// Two-dimensional array
var drinks = [
    ['coca-cola', 'fanta', 'sprite'], 
    ['guarana', 'monster', 'red-bull'], 
    ['beer', 'wine', 'whiskey']
];
document.write('Two-dimensional:<br>');
drinks.forEach(category => {
    category.forEach(drink => {
        document.write(`${drink}<br>`);
    });
    document.write('<br>');
});

// Array of objects
var cars = [
    {make: 'yugo', speed: 'very fast'},
    {make: 'zastava', speed: 'fast'},
    {make: 'lada', speed: 'not so fast'},
]
document.write('Array of objects:<br>');
cars.forEach(car => {
    document.write(`${car.make} is ${car.speed}<br>`);
});