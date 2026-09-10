const moviesWrapper = document.querySelector(".movies")

const nameWrapper = document.querySelector(".searchName")


async function getMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=b8073ce3&s=${searchTerm}`);
  nameWrapper.innerHTML = searchTerm;
  const data = await response.json();
  console.log(data.Search);
  moviesWrapper.innerHTML = data.Search.map((movie) => 
    { return `<div class="movie">
        <img src="${movie.Poster}" alt="Poster">
        <h2>${movie.Title}</h2>
        <h4>Year: ${movie.Year}</h4>
        <button>Learn More</button> </div>`
    })
    .slice(0, 6)
    .join("");
}

function onSearchChange(event) {
  console.log(event.target.value);
  getMovies(event.target.value);
}

function filterMovies(event) {
  renderMovies(event.target.value);
}

function renderMovies(filter) {
  const movies = document.querySelector(".movies");

  const moviesArray = moviesWrapper.innerHTML;

  if (filter === "OLD_TO_NEW") {
    console.log(filter);
    const filteredMovies = moviesArray.sort((a, b) => a.year - b.year);
    console.log(filteredMovies);
  }
}