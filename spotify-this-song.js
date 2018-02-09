const Spotify = require('node-spotify-api');
const keys = require('./keys.js');

const spotifyThis = function() {
	var spotify = new Spotify (
		keys.spotify
	)

	spotify.search({type: 'track', query: process.argv[3]}, function(err, data) {
		if(err) {
			return console.log('Error occurred: ' + err);
		}

		console.log(data);
	})
};

module.exports = spotifyThis