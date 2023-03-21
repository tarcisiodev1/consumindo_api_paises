function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  const continent = country.continents[0];
  const continentName = document.createElement("h2");
  continentName.innerHTML = `<span>Continente:</span> <p>${continent}</p>`;
  //   continentName.textContent = continent;

  card.append(name, flag, continentName);
  document.querySelector("#countries").append(card);
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  console.log(countries);
  countries.forEach(createCountryCard);
}

getCountries();
