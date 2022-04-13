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
  let arrayMovieTitles = array.map(movie => movie.title);
  let orderedArrayMovieTitles=arrayMovieTitles.sort()
  if (orderedArrayMovieTitles.length>20) return orderedArrayMovieTitles.slice(0,20)
  return orderedArrayMovieTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray=array.map(movie=>{
    let obj={}
    obj.title=movie.title
    obj.year=movie.year
    return obj
  }) 
  let orderedByNumberName=newArray.sort((a,b)=> {
     if (a.year===b.year) {
        let movieNameA = a.title.toUpperCase();
        let movieNameB = b.title.toUpperCase();
        if (movieNameA < movieNameB) {
          return -1;
        }
        if (movieNameA > movieNameB) {
          return 1;
        }
        return 0;   
    }
    if (a.year!=b.year) return a.year-b.year
  
  })
  return orderedByNumberName
}   
  
    

  



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,category) {
  let newArrayCategory=array.filter(movie=>{if(movie.genre.some(element=>element===category)){return movie}})
  let noScoreCounter=0  // number of movies without score
  newArrayCategory.forEach(movie=>{if(typeof(movie.score)!="number") {noScoreCounter++} }) 

  let sumAverage=newArrayCategory.reduce((acu,element)=>acu+element.score,0)

  let averageCategory=sumAverage/(newArrayCategory.length-noScoreCounter) // Here substract the one´s without score 
  return parseFloat (averageCategory.toFixed(2)) 
}

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {

  let minMoviesArray=array.map(movie=>{
    let obj={}
    obj.title=movie.title
    obj.year=movie.year
    obj.director=movie.director
    obj.duration=movie.duration
    obj.genre=movie.genre
    obj.score=movie.score
    return obj
  }) 
  // let minMoviesArray={...array}    <--- Cannot use this instead all of the top????

  minMoviesArray.forEach(movie=>{
    let time=movie.duration
    let arrayTime=time.split("h")  //it gives an array which the first element should be the hours
    let hours=parseInt(arrayTime[0])
    let minutes=0
    if(arrayTime[1]!=""){
        let stringMinutes=arrayTime[1]
        let minutesArray=stringMinutes.split("min")
        minutes=parseInt(minutesArray[0])
    }
    let min=hours*60+minutes
    movie.duration=min
  })




  return minMoviesArray
}

//Exercise 8: Get the best film of a year

function bestFilmOfYear(array,year) {
  let movieYearArray=[]
  array.forEach(movie=>{
    if(movie.year===year) movieYearArray.push(movie)
  })

  let bestFilm=movieYearArray.reduce((acu,element)=>{
    if(acu.score>element.score) return acu
    if(acu.score<=element.score) return element
    },movieYearArray[0])
  
    return [bestFilm]
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
