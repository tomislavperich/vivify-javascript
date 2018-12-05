var name1 = 'John';
console.info(`Outside anon function:`);
// console.log(`Hello ${name1}`);
// console.log(`Hello ${name2}`);
// console.log(`Hello ${name3}`);
// console.log(`Hello ${name4}`);

(function () {
    var name2 = 'Joe';
    console.log(`Inside anon function:`);
    // console.log(`Hello ${name1}`);
    // console.log(`Hello ${name2}`);
    // console.log(`Hello ${name3}`);
    // console.log(`Hello ${name4}`);
})();
