

// var makeRequest = async (url, method,data)=>{
//     try{
//         const result = $.ajax({
//             url:url,
//             method:method,
//             data:data
//         });
//         return result;
//     }catch(err){
//         console.log(err)
//     }
    
// }

// var getData=()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/','GET')
//     .then((res)=>console.log(res));
// }

// getData();


$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts/', // Replace with your API endpoint
    method: 'GET', // HTTP method (GET, POST, etc.)
    dataType: 'json', // Expected data format
    success: function(response) {
        console.log(response); // Handle the response data
    },
    error: function(error) {
        console.error('Error:', error); // Handle any errors
    }
});
