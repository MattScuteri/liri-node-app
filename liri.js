require("dotenv").config();

const keys = require("keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const omdb = require('omdb');

const queryURL = "https://api.twitter.com/1.1/statuses/home_timeline.json&count=20&";

// commands:
// my-tweets - show last 20 tweets and when they were created
// spotify-this-song - show artists, title, preview link from Spotify, album...if no song, default to "The Sign" by Ace of Base
// movie-this - will show title, year, IMDB rating, Rotten Tomato, Country of origin, Language, Plot, Actors...if no movie, defaults to Mr Nobody
// do-what-it-says - fs node package to read random.txt