

// // Post data 
// // Post data 
// axios.get('https://jsonplaceholder.typicode.com/posts/',{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'food',
//         body: 'barby',
//         userId: 1,
//       }),
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// // Update data 
// // Update data 
// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     body: JSON.stringify({
//         id:1,
//         title: 'food',
//         body: 'barby',
//         userId: 1,
//       }),
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// // Single Update data 
// // Single Update data 
// axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'food',
//       }),
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// // Delete data 
// // Delete data 
// axios.DELETE('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'DELTE',
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


// const makeRequest= async (config) =>{
//     return await axios(config)
// }

// // GET DATA 
// // GET DATA 
// const getData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/')
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// getData();
// // POST DATA 
// const postData = () =>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/',{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'food',
//         body: 'barby',
//         userId: 1,
//       }),
//     })
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// getData();
// postData();