
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
		"local": "Springfield",
		"github":"snsimpson1202"
	},
	"welcomeMessage" : "Hello, world!",
	"skills" : [
		"Quick learner", "Strong Communication Skills", "Awesome"
	],
	"bioPic" : "images/placeholder.gif"
	
};

var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(email); 
var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(github);
var local = HTMLlocation.replace("%data%", bio.contacts.local);
$("#header").append(local);

var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bioPic);

var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMessage);



if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}



var work = {
	"jobs" : [
		{
			"employer" : "Ashley House",
			"position" : "Child Care Worker",
			"dates" : "2013-current",
			"local" : "Springfield, MO",
			"description" : "Description goes here."
		},
		{
			"employer" : "Ashley House2",
			"position" : "Child Care Worker",
			"dates" : "2013-current",
			"local" : "Springfield, MO",
			"description" : "Description goes here."
		},
		{
			"employer" : "Ashley House3",
			"position" : "Child Care Worker",
			"dates" : "2013-current",
			"local" : "Springfield, MO",
			"description" : "Description goes here."
		}	
	]
};

for (job in work["jobs"]){
	console.log(work["jobs"][job].employer);
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job].employer);
	$("#workExperience").append(formattedEmployer);
	var formattedPosition = HTMLworkTitle.replace("%data%", work["jobs"][job].position);
	$("#workExperience").append(formattedPosition);
	
	var formattedDates = HTMLworkDates.replace("%data%", work["jobs"][job].dates);
	$("#workExperience").append(formattedDates);	
	var formattedLocal = HTMLworkLocation.replace("%data%", work["jobs"][job].local);
	$("#workExperience").append(formattedLocal);
	var formattedDescription = HTMLworkDescription.replace("%data%", work["jobs"][job].description);
	$("#workExperience").append(formattedDescription);

	$(".work-entry:last").append(formattedEmployer + formattedPosition)

}



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



