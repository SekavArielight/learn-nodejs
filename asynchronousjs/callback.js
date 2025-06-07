// Example to demonstrate callback hell

console.log('Start');

setTimeout(() => {
    console.log('Step 1');
    setTimeout(() => {
        console.log('Step 2');
        setTimeout(() => {
            console.log('Step 3');
            setTimeout(() => {
                console.log('Step 4');
                console.log('End');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);