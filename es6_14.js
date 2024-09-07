const taskOne = (callback)=>{
    console.log("task one");
    callback();
}

const taskTwo = (callback)=>{
    setTimeout(()=>{
        console.log("Task 2:Data Loading")
        callback();
    },2000);
}
const taskThree = (callback)=>{
    console.log("task three");
    callback();
}
const taskFour = (callback)=>{

    setTimeout(()=>{
        console.log("task four");
    callback();
    },2000)
}
const taskFive = ()=>{
    console.log("task fie");
}


// taskOne(()=>{taskTwo(()=>{taskThree(()=>{taskFour(()=>{taskFive();})});});});

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            });
        });
    });
});
