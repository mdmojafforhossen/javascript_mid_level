// promise part 2
// promise part 2


const taskOne = (()=>{
    return new Promise((resolve,reject)=>{
        resolve('task one is completed');
    });
});
const taskTwo = (()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('task Two is not completed');
        },1000)
    });
});
const taskThere = (()=>{
    return new Promise((resolve,reject)=>{
        resolve('task There is completed');
    });
});
const taskFour = (()=>{
    return new Promise((resolve,reject)=>{
        resolve('task Four is completed');
    });
});




taskOne()
.then((res)=>console.log(res))
.then(taskTwo)
.then((res)=>console.log(res))
.then(taskThere)
.then((res)=>console.log(res))
.then(taskFour)
.then((res)=>console.log(res))
.catch(err=>{
    console.log(err)
})