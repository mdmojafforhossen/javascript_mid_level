// array destructuring 
// array destructuring 

// let numbers = [10,20,30,40,50];


// var [a,b,c,d,e]=numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


var names ={
    id : 100,
    name: "mojaffor",
    city: "faridpur",
    languese:{
        native:"bangla",
        foreign:"english"
    }
}

//var {id,name,city,languese}=names;
var {id,name,city,languese:{native,foreign}}=names;

console.log(id);
console.log(name);
console.log(city);
console.log(native); //console.log(languese.native)
console.log(foreign);//console.log(languese.foreign)