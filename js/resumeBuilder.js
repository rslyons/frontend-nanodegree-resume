// Configure reference data and inputs
var skills=["Applications development","Java","Google App Engine","SQL Server","MySQL","Oracle","Requirements analysis","Project Management"];

var bio={
	"name": "Scott Lyons",
	"role": "Application Developer",
	"contacts": {
		"email": "rslyons@gmail.com",
		"mobile": "+1-510-717-5536",
		"location": "San Francisco area",
		"github": "rslyons"
	},
	"welcomeMessage": "I am an experienced developer of enterprise applications server-side venturing into client technologies for the first time.",
	"pictureURL": "https://www.facebook.com/photo.php?fbid=10202140825549646&l=0bbd7e4a9c",
	"skills": skills
};

var work = {
	"jobs": [
		{
			"employer": "Redi2 Technologies",
			"title": "Senior Applications Architect",
			"location": "Oakland, CA",
			"dates": "2003-present",
			"description": "Redi2 provides fee billing software to the asset management industry. I worked in all phases of the business development on the technical side, including managing the development, QA, and IT teams, providing customer and implementation support, and presenting the product during sales cycles."
		},
		{
			"employer": "loveLife Corporation",
			"title": "Intern - Data Analyst",
			"location": "Johannesburg, South Africa",
			"dates": "2003",
			"description": "I worked to analyze survey data (using STATA) from a nationwide survey of youth regarding HIV education and status. "
		},
		{
			"employer": "TenFold Corporation",
			"title": "Senior Applications Developer",
			"location": "San Francisco, CA",
			"dates": "1997-2002",
			"description": "TenFold developed enterprise software solutions for a number of industries, including healthcare, financial services, and insurance. I served as the technical manager on applications development projects for several years. "
		},
		{
			"employer": "Peace Corps Cameroon",
			"title": "Science Teacher",
			"location": "Kumba, Cameroon",
			"dates": "1999-2001",
			"description": "I taught high school physics and geology in a bilingual high school in southwestern Cameroon. "
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Ghana Institute of Organic Farming website draft",
			"dates": "2013",
			"description": "Drafted a website for the Ghana Institute of Organic Farming in Sirigu, Ghana, and trained local staff in the maintenance and upkeep.",
			"images": ["http://sites.google.com/site/giofedu"]
		},
		{
			"title": "Rebecca Benassini for City Council 2010",
			"dates": "2009-2013",
			"description": "Designed and managed campaign website for a city council race.",
			"images": ["url1","url2"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "California Institute of Technology",
			"location": "Pasadena, CA",
			"degree": "Bachelor of Science",
			"majors": ["Astronomy"],
			"dates": "1993-1997",
			"url": "http://www.caltech.edu"
		},
		{
			"name": "Univerity of California, Berkeley",
			"location": "Berkeley, CA",
			"degree": "Master of Public Policy",
			"majors": ["Public Policy"],
			"dates": 2005,
			"url": "http://www.berkeley.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
};


bio.display = function() {
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#header").prepend(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill;
		for (var i=0; i<bio.skills.length; i++) {
			formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);	
		};
	};
};



work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	};
};

//displayWork();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

// Last Name CAPS function and button
//function inName() {
//	var name=bio.name.trim().split(" ");

//	return name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
//}

//$("#main").append(internationalizeButton);
projects.display = function() {
	for (var project in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description); // This isn't right...how to reference sibling?

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images)
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url) + 
				HTMLschoolDegree.replace("%data%",education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors[0]));
	};
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#",education.onlineCourses[course].url) +
			HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[course].url));
	};
};

bio.display();
work.display();
projects.display();
education.display();