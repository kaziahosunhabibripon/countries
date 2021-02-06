fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    console.log(countries);
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        const countryDiv = document.createElement("div");

        const name = document.createElement("h3");
        name .innerHTML = country.name;
        const capital = document.createElement("p");
        capital.innerHTML = country.capital;

        const area = document.createElement("h6");
        area.innerHTML = country.area;
        countriesDiv.appendChild(countryDiv);
        countryDiv.appendChild(name);
        countryDiv.appendChild(capital);
        countryDiv.appendChild(area);
        // console.log(country.name);
    }

}