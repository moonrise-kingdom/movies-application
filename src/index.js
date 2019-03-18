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


movies.renderMovies();



$("#add").on("click", function(){
    $("#myModal").modal("show");
});

$('#add-movie-btn').on('click', function(){
    console.log($('#title').val())
    console.log($("input[name='star-rating']:checked").val())
    movies.addMovie();
    $('#row1').html('');
    movies.renderMovies();
    // var html = `<div class="card " id=>`;
    // html += 'Title: ' + $('#title').val() + '<br>';
    // html += 'Rating: ' + $("input[name='star-rating']:checked").val() + '</div>';
    // $('#row1').append(html);


    $("#myModal").modal("hide");
});

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/configuration?api_key=480ce5f77ce66832521205ff223c8438",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

$.ajax(settings).done(function (response) {
    console.log(response);
});



