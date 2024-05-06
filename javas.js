console.log("hello");
function myfun(name){
    return name;
}
myfun("faizan");
let d = new Date().getMonth().getDay().getYear();
console.log(d);

const string = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(string('abcd123'))