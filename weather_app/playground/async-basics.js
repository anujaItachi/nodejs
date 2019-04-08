console.log('Starting app')

setTimeout(() => {
    console.log('Inside the timeout')
}, 2000);

setTimeout(() => {
    console.log('Secound SETtimeout')
}, 0);

console.log('Finishing up');