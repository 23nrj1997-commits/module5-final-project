const moviesWrapper = document.querySelector(".movies")
const nameWrapper = document.querySelector(".searchName")

async function getMovies(searchTerm) {
  const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b8073ce3&s=${searchTerm}`);
  const data = await response.json();
  nameWrapper.innerHTML = searchTerm;
  console.log(data.Search);
  moviesWrapper.innerHTML = data.Search.map((movie) => 
    { return
      `<div class="movie">
        <img src="${movie.Poster}" alt="Poster">
        <h3>${movie.Title}</h3>
        <p>Year: ${movie.Year}</p>
        <button>Learn More</button>
      </div>`
    })
    .slice(0, 6)
    .join("");
}

function onSearchChange(event) {
  console.log(event.target.value);
  getMovies(event.target.value);
}