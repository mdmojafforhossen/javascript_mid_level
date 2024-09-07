// promise create 
// promise create 

let myPromise = new Promise((resolve,reject)=>{
    
    let success = false;

    if(success){
        resolve("Operation was successful!");
    }else{
        reject("There was an error");
    }

});

myPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});