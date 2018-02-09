const fs = require('fs');
const keys = require('./keys.js')
const showTweets = require('./my-tweets.js')
const spotifyThis = require('./spotify-this-song.js')
const movieThis = require('./movie-this.js')

const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const omdb = require('omdb');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

const random = function() {
	fs.readFile('random.txt', 'utf8', function(err, data) {
		if(err) {
			return console.log(err);
		}

		const output = data.split(',');
		const command = output[0];
		const query = output[1];

		if (command === "spotify-this-song") {
			spotifyThis();

		} else if (command === "my-tweets") {			
			showTweets();
		} else if (command === "movie-this") {		
			movieThis(query);
		};

		// console.log(output);
		console.log(command);
		console.log(query);

		// for (let i = 0; i < output.length; i++) {
			// process.argv.push(command);
			// process.argv.push(query);
			// console.log(process.argv[3] + process.argv[4]);
		// }
	})
}

module.exports = random;