var work = {
    "jobs": [{
            "employer": "Canadian Tire",
            "title": "Content Creator",
            "location": "Winnipeg",
            "dates": "October 2014 - Present",
            "description": "Worked closely with internal teams and external vendors in acquiring, \
             creating and maintaining engaging visual content for retail stores and mobile phones.\
              Including Interactive in-store experiences, graphics, animation and video content. ",
        }, {
            "employer": "Elder Creative",
            "title": "Senior Art Director",
            "location": "Toronto",
            "dates": "September 2011 - October 2014",
            "description": "Directed the effort to develop creative concepts and implementations in a \
            cross-disciplinary manner. Worked with planners and strategists to establish strategic and \
            creative approaches for a given assignment. Set the creative direction and strategic guidance\
             throughout the duration of client team projects. Executed the principles that make innovative\
              and effective digital communication.",
        }

    ],
    "display": function() {
        for (item in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
            var formattedEmployerTitle = formattedWorkExperience + formattedWorkTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location)
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description)
            $(".work-entry:last").append(formattedEmployerTitle,
            	formattedDates,
            	formattedLocation,
            	formattedDescription);
        }
    }
}
work.display();

var projects = {
    "project": [{
            "title": "Patio Builder",
            "date": "November 2014 - March 2015",
            "description": "The Patio Builder’s combination of functionality and simplicity is designed to \
            provide users with the tools to create backyard experiences in a few simple steps.",
        }, {
            "title": "Garage Builder",
            "date": "June 2015 - October 2015",
            "description": "The Garage Builder’s combination of functionality and simplicity is designed to \
            provide users with the tools to create garage experiences in a few simple steps."
        }

    ],

    "display": function() {
        for (item in projects.project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
            var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[item].date);
            var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[item].description);
            $(".project-entry:last").append(formattedProjectTitle,
            	formattedProjectDate,
            	formattedProjectDesc);

        }

    }
}
projects.display();

var bio = {
    "name": "Dustin Horrock",
    "role": "Content Creator",
    "welcomeMessage": "Welcome to my page here you will find random text",
    "skills": ["Design", "Interactive", "Retail"],
    "biopic": "http://placehold.it/250x250",
    "contacts": {
        "mobile": "2048808655",
        "email": "dustinhorrock@gmail.com",
        "github": "JohnnyRockenstein",
        "twitter": "@dustinhorrock",
        "blog": "http://www.blogmode.com",
        "location": "Winnipeg, Manitoba"
    },
    "display": function() {
        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedHTMLheaderName,formattedHTMLheaderRole);
        $("#header").append(formattedHTMLwelcomeMsg,formattedHTMLbioPic);
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.mobile);
        var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedHTMLmobile,
        	formattedHTMLemail,
        	formattedHTMLtwitter,
        	formattedHTMLgithub,
        	formattedHTMLblog,
        	formattedHTMLlocation);
    }
}
bio.display();


var education = {
    "schools": [{
        "name": "University of Manitoba",
        "location": "Winnipeg",
        "degree": "Bachelor Fine Art",
        "majors": ["Design", "Photography"],
        "dates": "September 2001 - May 2005",
        "url": "http://www.test1.com"
    }, {
        "name": "University of Manitoba",
        "location": "Winnipeg",
        "degree": "Bachelor Fine Art Thesis",
        "majors": ["Videography"],
        "dates": "September 2005 - May 2006",
        "url": "http://www.test2.com"
    }],
    "onlineCourses": [{
        "title": "Javascript Basics",
        "location": "San Franciso",
        "school": "Udacity",
        "dates": "September 2015",
        "url": "http://www.udacity.com/course/ud804"
    }, {
        "title": "Javascript Basics",
        "location": "San Franciso",
        "school": "Udacity",
        "dates": "September 2015",
        "url": "http://www.udacity.com/course/ud804"
    }]
}

function displayEducation(){
	for (item in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[item].name)
			.replace("#", education.schools[item].url);
		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
		var formattedNameWithDegree = formattedHTMLschoolName + formattedHTMLschoolDegree;
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
		var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors);
		$(".education-entry:last").append(formattedNameWithDegree,
			formattedschoolDates,
			formattedHTMLschoolLocation,
			formattedHTMLschoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (item in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].dates);
		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);
		var formattedTitleWithSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool ;
		$(".education-entry:last").append(formattedTitleWithSchool,
			formattedHTMLonlineDates,
			formattedHTMLonlineURL);
	}
}
displayEducation();




if (bio.skills[0].length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
};

function inName(old_name) {
    var newName = old_name;
    newName = newName.split(" ");
    firstName = newName[0].charAt(0).toUpperCase() + newName[0].slice(1).toLowerCase();
    lastName = newName[1].toUpperCase();
    fullName = firstName + " " + lastName;
    return fullName;
}

function locationizer(work) {
    var locations = [];
    for (var item in work.jobs) {
        locations.push(work.jobs[item].location);
    }
    return locations;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);




// for (item in work.jobs) {
// 	var entry = $(HTMLworkStart);
// 	$("#workExperience").append(entry);
// 	var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
// 	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
// 	entry.append(formattedWorkExperience,formattedWorkTitle);
// 	}
