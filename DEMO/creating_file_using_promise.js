var fs = require('fs');

// async function fun(){
//     a = await v1;
//     console.log(a);
//     b = await v2;
//     console.log(b);

// }

var v1 = new Promise((resolve, reject) => {
    fs.writeFile("./testt.js", "How are you;", ((error)=>{

        if(error){
            reject(error)
        } else {
            resolve('The file has been created')
        }

    }))
})

var v2 = new Promise((resolve,reject) => {
    fs.readFile("./testt.js", 'utf-8',((error, data)=>{
        if(error){
            reject(error)
        } else{
            resolve(data)
        }
    }))
})

let b = () => {
    v1.then((res)=>{
        console.log(res);
    }).catch((e)=> {console.log(e)
    });
    v2.then((res)=>{
        console.log(res);
    })

}

b();

//fun()