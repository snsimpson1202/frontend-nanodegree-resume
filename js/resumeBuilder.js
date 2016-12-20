
var name = "Sara Simpson";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front-End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);

var bio = {
	"name" : "Sara Simpson",
	"role" : "Front-End Web Developer",
	"contacts": {
		"email" : "snsimpson1202@gmail.com",
		"location": "Springfield",
		"github":"snsimpson1202"
	},
	"welcomeMessage" : "Hello, world!",
	"skills" : [
		"Quick learner", "Strong Communication Skills", "Awesome"
	],
	"bioPic" : "images/placeholder.gif"
	
};

var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bioPic);


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}



var work = {};
	work.employer = "Ashley House";
	work.position = "Child Care Worker";
	work.dates = "2013-current";
	work.location = "Springfield, MO";
	work.description = "Description goes here."

var projects = {
	"projects": {
		"title": "title goes here",
		"date": "date goes here",
		"description": "description goes here",
		"image": "image goes here"
	}
};

var education = {};
	education["name"] = "Missouri State University";
	education["years"] = "Graduated 2014";
	education["location"] = "Springfield, MO";

var education = {
	"schools": [
		{
			"name": "Ozarks Technical Community College",
			"location": "Springfield, MO",
			"degree": "Associative of Arts",
			"dates": "2009-2012",
			"url": "http://otc.edu"

		},
		{
			"name": "Missouri State University",
			"location": "Springfield, MO",
			"degree": "BS",
			"major": "Psychology",
			"minor": "Spanish",
			"dates": "2012-2015",
			"url": "http://missouristate.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "CS50",
			"school": "Harvard EdX",
			"website": "EdX"
		},
		{
			"title": "Front-End Development",
			"website": "Codecademy"
		}
	]
}	



