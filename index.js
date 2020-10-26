const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", ()=>console.log("READY"));
//load the transcript module
const transcript = require("./transcript")
transcript(client, "!transcript", 500)  
//transcript(client, "CMD", "MAXIMUM msgs") //minimum = 100 

client.login(config.TOKEN);
//Coded by Tomato#6966