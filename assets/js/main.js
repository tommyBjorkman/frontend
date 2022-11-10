const url = 'https://api.punkapi.com/v2/beers/';

let data = fetch(url)
   .then(res => res.json())
   .then(data => {
        for(let i = 0; i < data.length; i++){
            
        }
   });