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

if (process.argv[2] === "my-tweets") {
	showTweets();
} 

if (process.argv[2] === "spotify-this-song" && process.argv[3] !== null) {
	spotifyThis();
} else {
	process.argv[2] === "spotify-this-song" && process.argv[3] === "The Sign";
	spotifyThis();
}

if (process.argv[2] === "movie-this" && process.argv[3] !== null) {
	movieThis();
} else {
	process.argv[2] === "movie-this" && process.argv[3] === "Mr. Nobody";
	movieThis();
}

if (process.argv[2] === "do-what-it-says") {
	random();
};

// commands:
// my-tweets - show last 20 tweets and when they were created
// spotify-this-song - show artists, title, preview link from Spotify, album...if no song, default to "The Sign" by Ace of Base
// movie-this - will show title, year, IMDB rating, Rotten Tomato, Country of origin, Language, Plot, Actors...if no movie, defaults to Mr Nobody
// do-what-it-says - fs node package to read random.txt