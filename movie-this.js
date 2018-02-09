const omdb = require('omdb');
const keys = require('./keys.js');

const movieThis = function() {

	var omdb = new omdb (
		keys.omdb
	) 

	omdb.get({title: process.argv[3]}, true, function(err, movie) {
		if(err) {
			return console.log(err);
		}

		if (!movie) {
			return console.log('Movie not found!');
		}

	console.log(movie.title, movie.year, movie.imdb.rating, movie.tomato.rating, movie.countries, movie.language, movie.plot, movie.actors)
	//title, year, IMDB rating, Rotten Tomatoes, Country, Language, Plot, Actors
	})
}

module.exports = movieThis;