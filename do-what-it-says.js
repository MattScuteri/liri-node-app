const fs = require('fs');
const keys = require('./keys.js')
const showTweets = require('./my-tweets.js')
const spotifyThis = require('./spotify-this-song.js')
const movieThis = require('./movie-this.js')
// const doThis = require('./liri.js')

const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const omdb = require('omdb');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

const doThis = function(argOne, argTwo) {
	switch(argOne) {
		case "my-tweets":
			showTweets();
		break;
		case "spotify-this-song":
			spotifyThis(argTwo);
		break;
		case "movie-this":
			movieThis(argTwo);
		break;
		case "do-what-it-says":
			random();
		break;

		default:
			console.log("Try again!");
	}
}

const random = function() {
	fs.readFile('random.txt', 'utf8', function(err, data) {
		if(err) {
			return console.log(err);
		}

		const output = data.split(',');
		const command = output[0];
		const query = output[1];

		if (output.length === 2) {
			doThis(output[0], output[1]);
		} else if (output.length === 1) {
			doThis(output[0])
		}
	})
}

module.exports = random;