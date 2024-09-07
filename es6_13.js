// synchronous and asyncchrouns 
// synchronous and asyncchrouns 

const taskOne = ()=>{
    console.log("task one");
}

// const dataLoading = ()=>{
//     console.log("task: two Loading");
// }
const taskTwo = ()=>{
    setTimeout(()=>{
        console.log("Task 2:Data Loading")
    },2000);
}
const taskThree = ()=>{
    console.log("task three");
}
const taskFour = ()=>{
    console.log("task four");
}
const taskFive = ()=>{
    console.log("task fie");
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();