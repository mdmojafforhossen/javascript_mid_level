
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/', true);

// xhr.onload = function(){
//     if(xhr.status==200){
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//     }else{
//         console.error('Error:',xhr.statusText);
//     }
// }

// xhr.send();

var makeRequest =(method,url,data)=>{
    

const xhr =new XMLHttpRequest();
xhr.open(method,url,data);
xhr.setRequestHeader('Content-type','application/json; charset=UTF-8')
xhr.onload = ()=>{
    const data = xhr.response;
    console.log(JSON.parse(data));
}
xhr.onerror = () =>{
    console.log('Error:',xhr.statusText);
}

xhr.send(JSON.stringify(data));

}


var getData = () =>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts/')
}
var sendData = () =>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts/',{
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
}
var updateData = () =>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id:1,
        title: 'food',
        body: 'barby',
        userId: 1,
      })
}

var deleteData = () =>{
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1',{
   })
}

getData();
sendData();
updateData();
deleteData();