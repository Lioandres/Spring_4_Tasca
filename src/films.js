// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director ?? movie.title);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let arrayDirector = array.filter(movie => movie.director === director ?? movie.score);
  let sumAverage=arrayDirector.reduce((acu,element)=>acu+element.score,0)
  let averageDirector=sumAverage/arrayDirector.length
  return parseFloat (
    averageDirector.toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
