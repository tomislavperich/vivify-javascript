// Person class
function Person(fname, lname, gender) {
    this.firstName = fname;
    this.lastName = lname;
    this.gender = gender;
}

var person1 = new Person('John', 'Doe', 'male');
console.log(person1);


// Teacher class (inherits Person)
function Teacher(fname, lname, gender, subject) {
    Person.call(this, fname, lname, gender);
    this.subject = subject;
}

var teacher1 = new Teacher('Joanne', 'Doe', 'female', 'Math');
console.log(teacher1);


// Setting static variables and methods
var teacher2 = new Teacher('Joe', 'Doe', 'male', 'Linguistics');
teacher2.subject = 'PE';
teacher2.throwBall = () => {
    console.log('Boooinggg');
}

console.log(teacher2);
teacher2.throwBall();