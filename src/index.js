///IMPORT FUNCTIONS FROM API.JS ////
import movies from './api.js';

movies.renderMovies();
movies.featuredMovie();

// ADD MOVIE BUTTON MODAL //
$("#add").on("click", function(){
    $("#myModal").modal("show");
});

//ADD MOVIE FROM MODAL INFO//
$('#add-movie-btn').on('click', function(){
    movies.addMovie();
    $('#row1').html('');
    movies.renderMovies();
    $("#myModal").modal("hide");
});

//DELETE MOVIE BUTTON MODAL //
$("#delete").on("click", function(){
    $("#delete-modal").modal("show");
    $('#delete-mov-title').html('');
    movies.renderDeletePills();
});



