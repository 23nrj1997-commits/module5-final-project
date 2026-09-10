const moviesWrapper = document.querySelector(".movies")

const nameWrapper = document.querySelector(".searchName")

let movies = [];

async function getMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=b8073ce3&s=${searchTerm}`);
  nameWrapper.innerHTML = searchTerm;
  const data = await response.json();
  movies = data.Search;
  console.log(data.Search);
  renderMovies(movies);
}

function onSearchChange(event) {
  console.log(event.target.value);
  getMovies(event.target.value);
}

function renderMovies(movieList) {
    moviesWrapper.innerHTML = movieList
        .slice(0, 6)
        .map((movie) => {
            return `<div class="movie">
                <img src="${movie.Poster}" alt="Poster">
                <h2>${movie.Title}</h2>
                <h4>Year: ${movie.Year}</h4>
                <button>Learn More</button>
            </div>`;
        })
        .join("");
}

function filterMovies(event) {
    const sortedMovies = [...movies];

    if (event.target.value === "OLD_TO_NEW") {
        sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    if (event.target.value === "NEW_TO_OLD") {
        sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }

    renderMovies(sortedMovies);
}