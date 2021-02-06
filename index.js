fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countryDiv = document.getElementById("countries");
    console.log(countries);
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        console.log(country.name);

    }

}