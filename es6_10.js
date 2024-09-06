// arrow function 
// arrow function 



var students =[
    {
        name:"mojaffor",
        GPA:5.00,
        city:"faridpur",
    },
    {
        name:"Ripa",
        GPA:3.00,
        city:"rajshahi",
    },
    {
        name:"mourin",
        GPA:2.00,
        city:"faridpur",
    },
    {
        name:"saedur",
        GPA:4.50,
        city:"dhaka",
    },
    {
        name:"zafor",
        GPA:4.00,
        city:"faridpur",
    }
];

// traditional function 
// traditional function 

// function students1(){
//    return students.filter(function(x){
//         return x.GPA>3;
//     }).map(function(y){
//         return y.name;
//     });
// }

// console.log(students1());


// arrow function part 2
// arrow function part 2

var studentName =()=> students.filter((x)=>x.name).map((y)=>y.name);
var studentCity =()=> students.filter((x)=>x.city).map((y)=>y.city);

console.log(studentName());
console.log(studentCity());