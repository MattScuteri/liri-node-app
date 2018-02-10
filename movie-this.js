const omdb = require('omdb');
const request = require('request');
const keys = require('./keys.js');

const movieThis = function(film) {
	if (film === undefined) {
		film = "Mr. Nobody";
	};

	const queryURL = "http://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=trilogy";

	request(queryURL, function(error, response, body) {
		if (!error && response && response.statusCode) {
			console.log('Title: ' + JSON.parse(body).Title);
			console.log('Year: ' + JSON.parse(body).Year);
			console.log('IMDB Rating: ' + JSON.parse(body).imdbRating);
			console.log('Rotten Tomato Rating: ' + JSON.parse(body).Ratings[1].Value);
			console.log('Country: ' + JSON.parse(body).Countries);
			console.log('Language: ' + JSON.parse(body).Language);
			console.log('Plot: ' + JSON.parse(body).Plot); 
			console.log('Actors: ' + JSON.parse(body).Actors);
		};
	})
	//title, year, IMDB rating, Rotten Tomatoes, Country, Language, Plot, Actors
}

module.exports = movieThis;