var awesomeThoughts = "I am Dustin and I'm AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);

var unformattedName = "Dustin Horrock";
var unformattedRole = "Front End Student"
var formattedName = HTMLheaderName.replace("%data%", unformattedName);
var formattedRole = HTMLheaderRole.replace("%data%", unformattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var array = ["dad","mom","Jim"];
