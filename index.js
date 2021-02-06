fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    console.log(countries);

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        const countryDiv = document.createElement("div");
        countryDiv.className = "country";

        // const name = document.createElement("h3");
        // name .innerHTML = country.name;
        // const capital = document.createElement("p");
        // capital.innerHTML = country.capital;

        // const area = document.createElement("h6");
        // area.innerHTML = country.area;
        
        // countryDiv.appendChild(name);
        // countryDiv.appendChild(capital);
        // countryDiv.appendChild(area);
        
        const countryInfo = `
             <h3 class="country-name">${country.name}</h3>
             <p class="country-capital">${country.capital}</p>
             <h6 class="country-population">${country.population}</h6>
             <button class="btn btn-success Details"> Details</button>
             
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
       
    }

}