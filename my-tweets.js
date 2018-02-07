const showTweets = function() {

	const queryURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?mattcuteri=twitterapi&count=20&";

	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response) {
		console.log(response);
	})

}

module.exports = showTweets;