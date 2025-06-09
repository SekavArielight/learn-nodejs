const promise = new Promise ((resolve, reject) => {
    let condition = true;
    if (condition) {
        resolve('Yey! We are happy');
    } else {
        reject('We have an error!');
    }
});

promise.then(
    (result) => console.log(result),
    (error) => console.log(error)
);