const url=('/api/movies');


//RETURNS MOVIE DATABASE AS JSON //
const getMovies = () => {
  return fetch(url)

      .then(response => response.json());
};

//ADD MOVIE TO DATABASE
const addMovie =  (title, rating) =>{
    const newMovie = {title: title, rating: rating, id: id};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
      };
    fetch(url,options)
        .then(()=> console.log('new movie added'))
        .catch(()=> console.log('error'))
    };

/// REMOVE MOVIE FROM DATABASE
const removeMovie = (movieID) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(url + '/' + movieID+ '', options)
        .then(() => console.log(`movie ${movieID} deleted`))
        .catch(() => console.log('error on delete'));
}


///RENDER MOVIE CARDS USING GET MOVIE FUNCTION ///
function renderMovies() {
    getMovies().then((movies) => {
        movies.forEach(({title, rating}) => {
            var html = '<div class="card ">';
            html += 'Title: ' + title + '<br>';
            html += 'Rating: ' + rating + '</div>';
            $('#row1').append(html);
        })
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
        console.log(error);
    })
}




export default {getMovies, addMovie, removeMovie, renderMovies};

