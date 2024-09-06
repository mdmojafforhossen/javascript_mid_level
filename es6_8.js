

// map and filter 
// map and filter 


var numbers = [10,20,30,40,50];


var squreNumber = numbers.map(function(x){

    return x*x;

});
console.log(squreNumber);


var number = [10,20,4,6,7,9,30,40,50];

var newNumber =number.filter(function(x){
    return x<10;
});

console.log(newNumber);
