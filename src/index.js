/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */

import movies from './api.js';
// movies.getMovies().then((data) => console.log(data.lastIndexOf()))

movies.getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    `${title}<br/>${rating}`
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});


function renderMovie() {
    movies.getMovies().then((movies) => {
        movies.forEach(({title, rating, id}) => {
            var html = '<div class="card ">';
            html += 'Title: ' + title + '<br>';
            html += 'Rating: ' + rating + '</div>';
            $('#row1').append(html);
        })
    })
}

renderMovie()




