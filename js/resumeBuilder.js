
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
	"bioPic" : "http://res.cloudinary.com/sara-simpson-img/image/upload/c_scale,h_180,w_197/v1483022165/profile_hdhbvj.jpg"
	
};



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

// appends skills to the page

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

// work Object

var work = {
	"jobs" : [
		{
			"employer" : "Ashley House",
			"title" : "Child Care Worker",
			"dates" : "2013-current",
			"location" : "Springfield, MO",
			"description" : "Works with teenage girls in the foster care system to increase their independent living skills for life outside of the foster care system.",
			"url": "http://missouri.pchas.org/transitional-living-program/"
		}
	]
};


// iterates through work experience array and adds to page under HTMLworkStart	

	for( var job = 0; job < work.jobs.length; job++ ){
	$("#workExperience").append(HTMLworkStart);



	var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job].employer).replace("#", work["jobs"][job].url);
	var formattedTitle = HTMLworkTitle.replace("%data%", work["jobs"][job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work["jobs"][job].dates);
	$(".work-entry:last").append(formattedDates);	
	var formattedLocation = HTMLworkLocation.replace("%data%", work["jobs"][job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work["jobs"][job].description);
	$(".work-entry:last").append(formattedDescription);
}	

// projects Object

var projects = {
	"projects": [
		{
			"title": "Project1",
			"dates": "date goes here",
			"description": "description goes here",
			"images": "image goes here"
		},
		{
			"title": "Project2",
			"dates": "date goes here",
			"description": "description goes here",
			"images": "image goes here"
		},
		{
			"title": "Project3",
			"dates": "date goes here",
			"description": "description goes here",
			"images": "image goes here"
		}	
	]
};

// displays projects

projects.display = function(){
	for(var project = 0; project < projects.projects.length; project++ ) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.projects[project].images.length > 0){
			for(var image = 0; image < projects.projects[project].images; image++){
				var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImages);
			}
		}
	}	
}

projects.display();

// education object

var education = {
	"schools": [
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
			"school": "Harvard edX",
			"url": "https://courses.edx.org/certificates/b6bf6a96818644cbbbfcffe87ab60caa"
		},
		{
			"title": "HTML5 Part 1",
			"school":"University Cote d'Azur",
			"url": "https://courses.edx.org/certificates/798f087dd3ce48308c7a63b4c6986f46"
		},
		{
			"title": "HTML5 Part 2",
			"school": "University Cote d'Azur",
			"url": "https://courses.edx.org/certificates/43321202f2e444c3a9342ed8865d3900"
		},
		{
			"title": "Front-End Development",
			"school": "freecodecamp",
			"url": "https://freecodecamp.com"
		},
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"url": "http://udacity.com"

		},
		{
			"title": "HTML & CSS",
			"school": "codecademy",
			"url": "https://codecademy.com"
		},
		{
			"title": "Javascript",
			"school": "codecademy",
			"url": "https://codecademy.com"
		},
		{
			"title": "jQuery",
			"school": "codecademy",
			"url": "https://codecademy.com"
		},
		{
			"title": "AngularJS 1.X",
			"school": "codecademy",
			"url": "https://codecademy.com"
		},
		{
			"title": "Learn Git",
			"school": "codecademy",
			"url": "https://codecademy.com"
		},
		{
			"title": "Learn Sass",
			"school": "codecademy",
			"url": "https://codecademy.com"
		},
		{
			"title": "Learn SQL",
			"school": "codecademy",
			"url": "https://codecademy.com"
		},
		{
			"title":"Ruby",
			"school": "codecademy",
			"url": "https://codecademy.com"
		}
	]
}	

// displays education section

education.display = function(){
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for( var school = 0; school < education.schools.length; school++){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);

			var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
			$(".education-entry:last").append(formattedMinor);

		}	

	if (education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
			for(var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++){
				$("#education").append(HTMLschoolStart);

				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
				
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

			}
		}
	}	
}

education.display();

// adds a map
$("#mapDiv").append(googleMap);

// footer contacts

var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(email); 

// used to capitalize first letter of first name and capitalize all letters of last name
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name.join(" ");
}

// adds a button labeled internationalize = to fully capitalize the last name
//$("#main").append(internationalizeButton);



