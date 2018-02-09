const Spotify = require('node-spotify-api');
const keys = require('./keys.js');

const spotifyThis = function() {
	var spotify = new Spotify (
		keys.spotify
	)

	spotify.search({type: 'track', query: process.argv[3], limit: 1}, function(err, data) {
		if (query === null) {
			query === "The Sign";
		};

		if(err) {
			return console.log('Error occurred: ' + err);
		}

		let songs = data.tracks.items;
		for (i = 0; i < songs.length; i++) {
			console.log("Song: " + songs[i].name);
			console.log("Artist: " + songs[i].artists[0].name);
			console.log("Album: " + songs[i].album.name);
			console.log("Preview link: " + songs[i].preview_url);
		} 
		//artist, song title, preview link, album
	})
};

module.exports = spotifyThis