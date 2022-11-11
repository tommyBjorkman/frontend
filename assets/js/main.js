const url = 'https://api.punkapi.com/v2/beers/';
const cardBeer = document.querySelector('.cardBeer');
let output = '';

let data = fetch(url)
  .then(res => res.json())
  .then(data => {
    for (let i = 1; i < data.length; i++) {
      const beerName = data[i].name;
      const beerTagline = data[i].tagline;
      const beerDescription = data[i].description;
      const beerImg = data[i].image_url;
      const beerInd = data[i].food_pairing;

      output += `
               <div class="shop">
        <div class="card" style="width: 18rem;">
        <img src="${beerImg}" class="card-img-top beerimg" alt="Picture of a beer">
        <div class="card-body">
          <h5 class="card-title">${beerName}</h5>
          <p class="card-text">${beerTagline}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${beerDescription}</li>
          <li class="list-group-item">Goes well with: ${beerInd}</li>
        </ul>
        <div class="card-body">
          <button id="btn" class="btn btn-primary">add to cart</button>
          
        </div>
      </div>
      </div>
      <br>
        `;
    };
    cardBeer.innerHTML = output;
  })
  let update = () => {

  }
  update()