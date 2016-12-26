
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
		"HTML/CSS", "Javascript/JQuery", "Good communication skills"
	],
	"bioPic" : "images/placeholder.gif"
	
};

// used to capitalize first letter of first name and capitalize all letters of last name
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name.join(" ");
}

$("#main").append(internationalizeButton);


var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(email); 
var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(github);
var local = HTMLlocation.replace("%data%", bio.contacts.local);
$("#topContacts").append(local);

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
			"title" : "Child Care Worker",
			"dates" : "2013-current",
			"local" : "Springfield, MO",
			"description" : "Description goes here."
		},
		{
			"employer" : "Ashley House2",
			"title" : "Child Care Worker",
			"dates" : "2013-current",
			"local" : "Springfield, MO",
			"description" : "Description goes here."
		},
		{
			"employer" : "Ashley House3",
			"title" : "Child Care Worker",
			"dates" : "2013-current",
			"local" : "Springfield, MO",
			"description" : "Description goes here."
		}	
	]
};


// iterates through work experience array and adds to page under HTMLworkStart	

	for( var job = 0; job < work.jobs.length; job++ ){
	$("#workExperience").append(HTMLworkStart);



	var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work["jobs"][job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work["jobs"][job].dates);
	$(".work-entry:last").append(formattedDates);	
	var formattedLocal = HTMLworkLocation.replace("%data%", work["jobs"][job].local);
	$(".work-entry:last").append(formattedLocal);
	var formattedDescription = HTMLworkDescription.replace("%data%", work["jobs"][job].description);
	$(".work-entry:last").append(formattedDescription);
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



