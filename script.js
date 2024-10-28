const container = document.getElementsByClassName("container")[0];

function countryDetails() {
  const url = "https://restcountries.com/v3.1/all";

  fetch(url)
    .then((data) => data.json())
    .then((countries) => {
      console.log(countries);
      countries.forEach((country) => {
        const division = document.createElement("div");
        division.setAttribute("class", "row");
        division.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                      <div class="card h-100">
                                          <div class="card-header">${country.name.common}</div>
                                          <img src="${country.flags?.png}" class="card-img-top">
                                          <div class="card-body">
                                              <div class="card-text">Region: ${country.region}</div>
                                              <div class="card-text">Native Name: ${country.name.nativeName?.eng?.official}</div>
                                              <div class="card-text">Population: ${country.population}</div>
                                              <div class="card-text">Capital: ${country.capital}</div>
                                              <div class="card-text">Flag: ${country.flags?.png}</div>
                                          </div>
                                      </div>
                                  </div>
                                  <br />`;
        container.appendChild(division);
      });
    })
    .catch((error) => console.log(error));
}
countryDetails();