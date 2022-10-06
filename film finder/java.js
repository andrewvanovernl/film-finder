function addMoviesToDom(movies) {
    const navList = document.getElementById("list");

    const listItems = movies.map((movie) => {
        let listItem = document.createElement("li");

        let image = document.createElement("img");
        image.src = movie.Poster;

        let link = document.createElement("a");
        link.href = "https://www.imdb.com/title/" + movie.imdbID;
        link.target = "_blank";

        listItem.appendChild(link);
        link.appendChild(image);

        return listItem;
    });

    listItems.forEach((listItem) => {
        navList.appendChild(listItem);
    });
}


function addEventListeners() {
    const radioButtons = document.getElementsByName("film-filter");

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", handleOnChangeEvent);
    });
}

function filterMoviesOnTitle(wordInMovieTitle) {
    removeMovies();

    const filterMovies = movieArray.Movies
        .filter((movie) => {
            return movie.Title.includes(wordInMovieTitle);
        });

    addMoviesToDom(filterMovies);


    console.log("hey I am a", wordInMovieTitle, "film");
}

function filterLatestMovies() {
    removeMovies();

    const filterMoviesYear = movieArray.Movies
        .filter((movie) => {
            return movie.Year >= 2014;
        });

    addMoviesToDom(filterMoviesYear);

    console.log("Movies from 2014 and newer:", filterMoviesYear);
}

function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "lastmovies":
            filterLatestMovies();
            break;
        case "avenger":
            filterMoviesOnTitle("Avenger");
            break;
        case "xmen":
            filterMoviesOnTitle("X-Men");
            break;
        case "princess":
            filterMoviesOnTitle("Princess");
            break;
        case "batman":
            filterMoviesOnTitle("Batman");
            break;
        default:
            console.log("default");
            break;
    }
}

addEventListeners();

function removeMovies() {
    const currentListedMovies = document.getElementById("list");

    while (currentListedMovies.hasChildNodes()) {
        currentListedMovies.removeChild(currentListedMovies.firstChild);
        console.log(" movies removed");
    };
}
