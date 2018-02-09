const omdb = require('omdb');
const keys = require('./keys.js');

const movieThis = function() {

	var omdb = new Omdb (
		keys.omdb
	);

	omdb.get({title: process.argv[3]}, true, function(err, movie) {
		if(err) {
			return console.log(err);
		}

		if (!movie) {
			return console.log('Movie not found!');
		}

	console.log('Title: %s' + movie.title);
	console.log('Year: %d' + movie.year);
	console.log('IMDB Rating: %s' + movie.imdb.rating);
	console.log('Rotten Tomato Rating: %s ' + movie.tomato.rating);
	console.log('Country: %s ' + movie.countries);
	console.log('Language: %s' + movie.language);
	console.log('Plot: %s' + movie.plot); 
	console.log('Actors: %s ' + movie.actors);
	//title, year, IMDB rating, Rotten Tomatoes, Country, Language, Plot, Actors
	})
}

module.exports = movieThis;