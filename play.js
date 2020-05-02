/*var name ="Sebastian";
var age = 33;
var hasHobbies = true;
*/

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
//const add = (a,b) => a+b;
//const addOne = a => a + 1:
//const addRandom = () = 1 + 2;
//console.log(add(1,2));
//console.log(summarizeUser(name, age, hasHobbies));

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

const hobbies = ['Sports', 'Cooking'];
/* con esto recorro y muestro cada hobby en cada iteracion
for (let hobby of hobbies){
    console.log(hobby);
} 
*/
// ahora con .map muestro el array y puedo asignarle un tipo hobby:, el segundo ejemplo hace lo mismo pero solo muestra la data
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//console.log(hobbies)

//hobbies.push('Programming');
//console.log(hobbies)

// para copiar objetos de un array se debe utilizar ... esto toma los elementos del antiguo array y los agrega a la copia
const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson = {...person};
console.log(copiedPerson);

// aca puedo agregar tantos argumentos como quiera y el...aRG SE ADAPTARA A todos los argumentos o parametros q le pase al llamarlo en el console.log
const toArray = (...arg) => {
    return arg;
};

console.log(toArray(1,2,3,4));