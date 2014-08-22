$(document).ready(function() {
	
	/* Initializes Twitter Feed */
	$(function($){
		$(".feed").tweet({
			join_text: "auto",
			username: "mobicreations",
			count: 10,
			auto_join_text_default: "I said,",
			auto_join_text_ed: "I",
			auto_join_text_ing: "I was",
			auto_join_text_reply: "I replied",
			auto_join_text_url: "I shared",
			loading_text: "Loading Tweets.."
		});
	});

});