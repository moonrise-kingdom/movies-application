/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */

///IMPORT FUNCTIONS FROM API.JS ////
import movies from './api.js';

// movies.getMovies().then((data)=> console.log(data.slice(-1)[0].id + 1));


const test = movies.getMovies()
    .then((data)=> data)
    .then((data)=>console.log(data));

console.log(test);

movies.renderMovies();


$("#add").on("click", function(){
    $("#myModal").modal("show");
});




