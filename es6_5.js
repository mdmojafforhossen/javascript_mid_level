// object Literals
// object Literals

function sudentOne(name, age){
    return{
        name:name,
        age:age
    }
}
console.log("nojaffe",29);

function sudentOne(name, age){
    return{
        name,
        age
    }
}
console.log("nojaffe",29);


var message = {
    body : function(){
        return "This is object function";
    }
}
console.log(message.body());
// ES6 object 
// ES6 object 
var message = {
    'object name'(){
        return "This is object function ES6";
    }
}
console.log(message['object name']());
