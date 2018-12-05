// Person class
class Person {
    constructor(fname, lname, gender) {
        this.firstName = fname;
        this.lastName = lname;
        this.gender = gender;
    }
}

var person1 = new Person('John', 'Doe', 'male');
console.log(person1);


// Teacher class (inherits Person)
class Teacher extends Person {
    constructor(fname, lname, gender, subject) {
        super(fname, lname, gender);
        this.subject = subject;
    }

    static teachStuff() {
        console.log('Teaching blah blah blah...');
    };
}

Teacher.school = 'high school';

var teacher1 = new Teacher('Joanne', 'Doe', 'female', 'Math');
Teacher.teachStuff();
console.log(teacher1);


// Setting instance variables and methods
var teacher2 = new Teacher('Joe', 'Doe', 'male', 'Linguistics');
teacher2.subject = 'PE';
teacher2.throwBall = () => {
    console.log('Boooinggg');
}

console.log(teacher2);
teacher2.throwBall();