var name ="Sebastian";
var age = 33;
var hasHobbies = true;

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




const add = (a,b) => a+b;
//const addOne = a => a + 1:
//const addRandom = () = 1 + 2;

console.log(add(1,2));

console.log(summarizeUser(name, age, hasHobbies));