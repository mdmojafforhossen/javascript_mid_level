// async await
// async await


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


async function allTaske(){
    try{
        var t1 = await taskOne();
    console.log(t1);
    var t1 = await taskTwo();
    console.log(t2);
    var t1 = await taskThere();
    console.log(t3);
    var t1 = await taskFour();
    console.log(t4);
    }catch(e){
        console.log(e);
    }

}
allTaske();

