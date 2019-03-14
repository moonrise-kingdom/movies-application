const url=('/api/movies');

const getMovies = () => {
  return fetch(url)
      .then(response => response.json());
};

const addMovie =  (title, rating, id) =>{
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

export default {getMovies, addMovie};