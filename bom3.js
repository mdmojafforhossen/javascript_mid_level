



var myButton = document.querySelector("#myButton");
var message =document.querySelector(".message");

// myButton.addEventListener('click',myFunction);

// function myFunction(){
//     message.textContent="User Register Successfully";

//     setTimeout(()=> {
//         message.textContent = "";
//     }, 1000);;
// }



myButton.addEventListener('click',myCount);


function myCount(){
    count =1;
    message.textContent = count;


    setInterval(() => {
        count++;
        message.textContent = count;
        
    }, 1000);
}

