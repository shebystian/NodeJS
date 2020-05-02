/*var name ="Sebastian";
var age = 33;
var hasHobbies = true;
*/
const person = {
    name: 'Sebastian',
    age: 33,
    greet: function() {
        console.log('Hi, mi name is ' + this.name);
        /* ó
         greet() {
         console.log('Hi, mi name is ' + this.name);
        */
    }
};

person.greet();
/*
function summarizeUser(userName, userAge, userHasHobby){
    return (
        'Name is ' +
         userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' + 
        userHasHobby

    );
}
*/




const add = (a,b) => a+b;
//const addOne = a => a + 1:
//const addRandom = () = 1 + 2;

//console.log(add(1,2));

//console.log(summarizeUser(name, age, hasHobbies));