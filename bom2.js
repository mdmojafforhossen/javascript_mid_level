
var text;
var h1 = document.createElement("h1");


function welcomeMessage(){
var name = prompt("enter");
if(name == null || name == ''){
    text = "No Name Found".toUpperCase();
}else{
    text = name.toUpperCase();
}
var textNode = document.createTextNode(text);
h1.appendChild(textNode);
document.body.appendChild(h1);
}

welcomeMessage();