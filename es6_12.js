

// array method 
// array method 

let numbers =[7,5,20,37];

// var evenNumber = numbers.find(x=> x%2==0);


var evenNumber =(value)=>{
    if(value%2==0){
        return value;
    }
}

var firstEvenNumber = numbers.findIndex(evenNumber);

console.log(firstEvenNumber);

// =====================
// =====================

var students = [
    {
        id:100,
        gpa:3.00
    },
    {
        id:101,
        gpa:3.00
    },
    {
        id:102,
        gpa:2.00
    },
    {
        id:103,
        gpa:5.00
    }
]

var studentInfo = students.find(x=> x.gpa>3);
console.log(studentInfo);