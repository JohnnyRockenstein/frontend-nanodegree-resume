var work = {
    "jobs": [{
            "employer": "Canadian Tire",
            "title": "Content Creator",
            "location": "Winnipeg",
            "dates": "October 2014 - Present",
            "description": "Worked closely with internal teams and external vendors in acquiring, creating and maintaining engaging visual content for retail stores and mobile phones. Including Interactive in-store experiences, graphics, animation and video content. ",
        }, {
            "employer": "Elder Creative",
            "title": "Senior Art Director",
            "location": "Toronto",
            "dates": "September 2011 - October 2014",
            "description": "Directed the effort to develop creative concepts and implementations in a cross-disciplinary manner. Worked with planners and strategists to establish strategic and creative approaches for a given assignment. Set the creative direction and strategic guidance throughout the duration of client team projects. Executed the principles that make innovative and effective digital communication.",
        }

    ]
}

var projects = {
    "project": [{
        "title": "Patio Builder",
        "date": "November 2014 - March 2015",
        "description": "The Patio Builder’s combination of functionality and simplicity is designed to provide users with the tools to create backyard experiences in a few simple steps.",
    }, {
        "title": "Garage Builder",
        "date": "June 2015 - October 2015",
        "description": "The Garage Builder’s combination of functionality and simplicity is designed to provide users with the tools to create garage experiences in a few simple steps."
    }]
}

var bio = {
    "name": "Dustin Horrock",
    "role": "Content Creator",
    "welcomeMessage": "Welcome to my page",
    "skills": ["Design", "Interactive", "Retail"],
    "contacts": {
        "mobile": "2048808655",
        "email": "dustinhorrock@gmail.com",
        "github": "JohnnyRockenstein",
        "location": "Winnipeg, Manitoba"
    }
}

var education = {
    "schools": [
    {
    	"name": "University of Manitoba",
        "location": "Winnipeg",
        "degree": "Bachelor Fine Art",
        "majors": ["Design","Photography"],
        "dates": "September 2001 - May 2005",
        "url": "http://www.test.com"
    },
    {
    	"name": "University of Manitoba",
    	"location": "Winnipeg",
        "degree": "Bachelor Fine Art Thesis",
        "majors": ["Videography"],
        "dates": "September 2005 - May 2006",
        "url": "http://www.test.com"
    }
    ],
   	"onlineCourses": [
   	{
   		"title": "Javascript Basics",
   		"school": "Udacity",
   		"dates": "September 2015",
   		"url": "http://www.udacity.com/course/ud804"
   	}
   	]
}
if (bio.skills[0].length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
};

function displayWork() {
    for (item in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
        var formattedEmployerTitle = formattedWorkExperience + formattedWorkTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location)
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description)
        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    }
}
displayWork();

function inName(old_name){
	var newName = old_name;
	newName = newName.split(" ");
	firstName = newName[0].charAt(0).toUpperCase() + newName[0].slice(1).toLowerCase();
	lastName = newName[1].toUpperCase();
	fullName = firstName +" " + lastName;
	return fullName;
}






function locationizer(work_obj) {
    var locations = [];
    for (var item in work_obj.jobs) {
        locations.push(work_obj.jobs[item].location);
    }
    return locations;
}

$("#main").append(internationalizeButton);



// for (item in work.jobs) {
// 	var entry = $(HTMLworkStart);
// 	$("#workExperience").append(entry);
// 	var formattedWorkExperience = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
// 	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
// 	entry.append(formattedWorkExperience,formattedWorkTitle);
// 	}

