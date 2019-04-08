// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey, Hoe are you');
//         reject('Unable to fulfill promise');
//     }, 2500);
    
// });

// somePromise.then((message) => {
//     console.log('success:', message);
// }, (errorMessage) => {
//     console.log('Error:', errorMessage);

// });

var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('argument should be a numbers');
            }
        }, 1500);
    });
};

// asyncAdd(5, '7').then((res) => {
//     console.log('Results:', res);
//     return asyncAdd(res, 33);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log('Should be 45', res);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });

asyncAdd(5, '7').then((res) => {
    console.log('Results:', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Should be 45', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});