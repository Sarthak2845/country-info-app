
const countryContainer = document.querySelector(".countries-container");
const darkModeToggle = document.querySelector(".dark-mode-btn");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {

      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
    countryCard.href = `/country.html?name=${country.name.common}`
    // countryCard.target="_blank"
      const cardHtml = `
        <img src="${country.flags.svg}" alt="${country.name.common} flag">
        <div class="card-text">
          <h3 class="card-title">${country.name.common}</h3>
          <p><b>Population: </b>${country.population.toLocaleString()}</p>
          <p><b>Region: </b>${country.region}</p>
          <p><b>Capital: </b>${country.capital ? country.capital[0] : "N/A"}</p>
        </div>`;    
      countryCard.innerHTML = cardHtml;
      countryContainer.appendChild(countryCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries data:", error);
    countryContainer.innerHTML = "<p>Failed to load countries data.</p>";
  });

 

  
  darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode-body");
    document.querySelector(".header-container").classList.toggle("dark-mode-header");
  
 
    const countryCards = document.querySelectorAll(".country-card");
    countryCards.forEach(card => {
      card.classList.toggle("dark-mode-card");
      console.log(card);
    });
  
    const icon = darkModeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode-body")) {
      icon.classList.replace("bi-moon-fill", "bi-sun-fill");
      darkModeToggle.innerHTML = `<i class="bi bi-sun-fill"></i>&nbsp;&nbsp;Light Mode`;
    } else {
      icon.classList.replace("bi-sun-fill", "bi-moon-fill");
      darkModeToggle.innerHTML = `<i class="bi bi-moon-fill"></i>&nbsp;&nbsp;Dark Mode`;
    }
  });
  
  
  