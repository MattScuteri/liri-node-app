require("dotenv").config();

const keys = require('./keys.js')
const showTweets = require('./my-tweets.js')
const spotifyThis = require('./spotify-this-song.js')
const movieThis = require('./movie-this.js')
const random = require('./do-what-it-says.js')

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

const assignArgs = function(argOne, argTwo) {
	doThis(argOne, argTwo);
}

module.exports = doThis;

assignArgs(process.argv[2], process.argv[3]);


// commands:
// my-tweets - show last 20 tweets and when they were created
// spotify-this-song - show artists, title, preview link from Spotify, album...if no song, default to "The Sign" by Ace of Base
// movie-this - will show title, year, IMDB rating, Rotten Tomato, Country of origin, Language, Plot, Actors...if no movie, defaults to Mr Nobody
// do-what-it-says - fs node package to read random.txt