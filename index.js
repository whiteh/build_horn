var player = require('play-sound')(opts = {});
var Botkit = require('botkit');

var API_KEY = process.env.token;  // Requires API token as env variable

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: API_KEY,
}).startRTM()

controller.hears(['success','normal'],['message_received'],function(bot,message) {  
    // $ mplayer
	player.play('horn.wav', function(err){
	  if (err) throw err
	});
})