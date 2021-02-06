fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => displayCountries(data))
    
const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        
        countryDiv.className = "country";
        const countryInfo = `
        <h3 class="country-name">${country.name} </h3>
        <p class="country-capital">${country.capital}</p>
        <h5> ${country.languages[0].name}</h5>
        <button onclick="displayDetails('${country.name}')" class="btn btn-success Details"> Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

        
    });


    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];

    //     const countryDiv = document.createElement("div");
    //     countryDiv.className = "country";

    //     // const name = document.createElement("h3");
    //     // name .innerHTML = country.name;
    //     // const capital = document.createElement("p");
    //     // capital.innerHTML = country.capital;

    //     // const area = document.createElement("h6");
    //     // area.innerHTML = country.area;
        
    //     // countryDiv.appendChild(name);
    //     // countryDiv.appendChild(capital);
    //     // countryDiv.appendChild(area);
        
    //     const countryInfo = `
    //          <h3 class="country-name">${country.name}</h3>
    //          <p class="country-capital">${country.capital}</p>
    //          <h6 class="country-population">${country.population}</h6>
    //          <button class="btn btn-success Details"> Details</button>
             
    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
       
    // }

}

const displayDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data=> renderCountryInfo(data[0]));
    


}
const renderCountryInfo = country=>{
    console.log(country);
    const countryDiv = document.getElementById("countryDetails");
    countryDiv.innerHTML = `
    <h1> ${country.name}</h1>
    <h6 >${country.region}</h6>
    <img src="${country.flag}">
    <p> ${country.population}</p>
    <h5> ${country.currencies[0].name}</h5>
    
    `

}