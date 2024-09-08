

// get data 
// get data 
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
//     headers: {
//         'Content-type': 'application/json',
//       },
//     })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch(error => console.error('Error:', error)); 


const makeRequest = async(url,config)=>{
    const response = await fetch(url,config);
    if(!response.ok){
        const message = `Error:${response.status}`;
        throw new Error(message);
    }
    const data = await response.json();
    return data;
}

const getData =()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/')
    .then((response)=>console.log(response))
    .catch((message)=>console.log(message));

}
// POST method requesr 
// POST method requesr 
const sendData =()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/',{
        method: 'POST',
        body: JSON.stringify({
            title: 'food',
            body: 'barby',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json',
          },
    })
    .then((response)=>console.log(response))
    .catch((message)=>console.log(message));

}
// update data requesr 
// update data requesr 
const updateData =()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        body: JSON.stringify({
            id:1,
            title: 'awesome food',
            body: 'barby',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json',
          },
    })
    .then((response)=>console.log(response))
    .catch((message)=>console.log(message));

}

// delete data requesr 
// delete data requesr 
const deleteData =()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'DELETE',
    })
    .then((response)=>console.log(response))
    .catch((message)=>console.log(message));

}


getData();
sendData();
updateData();
deleteData();