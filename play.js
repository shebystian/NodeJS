const fecthData = () => {
    const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Done!');
     },1500);
    });
    return promise;
};

setTimeout(()=>{
    console.log('Timer is done!');
    fecthData()
    .then(text=> {
        console.log(text);
        return fecthData();
    })
    .then(text2 => {
        console.log(text2);
    }) 
}, 2000);

console.log('Hello!');
console.log('Hi!');
