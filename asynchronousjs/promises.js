let promiseVar = new Promise((resolve, reject) => {
    let condition = true;

    if(condition){
        resolve("Happy!!!!")
    } else {
        reject("Somehow Happy!!!")
    }
});

promiseVar.then(
    (result) => console.log(result),
    (error) => console.log(error)
);














// const promise = new Promise ((resolve, reject) => {
//     let condition = true;
//     if (condition) {
//         resolve('Yey! We are happy');
//     } else {
//         reject('We have an error!');
//     }
// });

// promise.then(
//     (result) => console.log(result),
//     (error) => console.log(error)
// );