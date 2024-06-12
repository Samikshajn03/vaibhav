const apiUrl = 'https://api.example.com/data';

fetch(apiUrl)
   .then(response => {
       if (!response.ok){
          throw new Error('network response was not ok');
       }
       return response.json();
   })
    .then (data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:',error);
    })