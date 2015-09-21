var bio = {
    name: "Dustin Horrock",
    role: "Content Creator",
    contacts: {
        mobile: "2048808655",
        email: "dustinhorrock@gmail.com",
        github: "JohnnyRockenstein",
        twitter: "@dustinhorrock",
        location: "Winnipeg, Manitoba"
    },
    welcomeMessage: "Welcome! Here you will find information about me.",
    skills: ["Design", "Interactive", "Retail"],
    biopic: "/images/dustin.jpg",
    display: function() {
        var formattedSkill;
        var formattedHTMLheaderName = HTMLheaderName.replace("%data%",
            bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%",
            bio.role);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",
            bio.welcomeMessage);
        var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedHTMLheaderName,
            formattedHTMLheaderRole);
        $("#header").append(formattedHTMLwelcomeMsg,
            formattedHTMLbioPic);
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts
            .mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts
            .email);
        var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts
            .twitter);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts
            .github);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts
            .location);
        $("#topContacts").append(formattedHTMLmobile,
            formattedHTMLemail,
            formattedHTMLtwitter,
            formattedHTMLgithub,
            formattedHTMLlocation);
        $("#header").append(HTMLskillsStart);
        for (item in bio.skills) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[
                item]);
            $("#skills").append(formattedSkill);
        }
    }
};
var education = {
    schools: [{
        name: "University of Manitoba",
        location: "Winnipeg",
        degree: "Bachelor of Fine Arts",
        majors: ["Design", "Photography"],
        dates: "September 2001 - May 2005",
        url: "http://umanitoba.ca/student/admissions/programs/fine-arts.html"
    }, {
        name: "University of Manitoba",
        location: "Winnipeg",
        degree: "Bachelor of Fine Arts Thesis",
        majors: ["Videography"],
        dates: "September 2005 - May 2006",
        url: "http://umanitoba.ca/schools/art/undergrad/index.html"
    }],
    onlineCourses: [{
        title: "Javascript Basics",
        school: "Udacity",
        dates: "September 2015",
        url: "http://www.udacity.com/course/ud804"
    }, {
        title: "Intro to HTML & CSS",
        school: "Udacity",
        dates: "September 2015",
        url: "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }],
    display: function() {
        var formattedHTMLschoolName,
            formattedHTMLschoolDegree,
            formattedNameWithDegree,
            formattedschoolDates,
            formattedHTMLschoolLocation,
            formattedHTMLschoolMajor,
            formattedHTMLonlineTitle,
            formattedHTMLonlineSchool,
            formattedHTMLonlineDates,
            formattedHTMLonlineURL,
            formattedTitleWithSchool;
        for (item in education.schools) {
            $("#education").append(HTMLschoolStart);
            formattedHTMLschoolName = HTMLschoolName.replace("%data%",
                    education.schools[item].name)
                .replace("#", education.schools[item].url);
            formattedHTMLschoolDegree = HTMLschoolDegree.replace(
                "%data%", education.schools[item].degree);
            formattedNameWithDegree = formattedHTMLschoolName +
                formattedHTMLschoolDegree;
            formattedschoolDates = HTMLschoolDates.replace("%data%",
                education.schools[item].dates);
            formattedHTMLschoolLocation = HTMLschoolLocation.replace(
                "%data%", education.schools[item].location);
            formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%",
                education.schools[item].majors);
            $(".education-entry:last").append(formattedNameWithDegree,
                formattedschoolDates,
                formattedHTMLschoolLocation,
                formattedHTMLschoolMajor);
        }
        $("#education").append(HTMLonlineClasses);
        for (item in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%",
                    education.onlineCourses[item].title)
                .replace("#", education.onlineCourses[item].url);
            formattedHTMLonlineSchool = HTMLonlineSchool.replace(
                "%data%", education.onlineCourses[item].school);
            formattedHTMLonlineDates = HTMLonlineDates.replace("%data%",
                education.onlineCourses[item].dates);
            formattedHTMLonlineURL = HTMLonlineURL.replace("%data%",
                    education.onlineCourses[item].url)
                .replace("#", education.onlineCourses[item].url);
            formattedTitleWithSchool = formattedHTMLonlineTitle +
                formattedHTMLonlineSchool;
            $(".education-entry:last").append(formattedTitleWithSchool,
                formattedHTMLonlineDates,
                formattedHTMLonlineURL);
        }
    }
};

var work = {
    jobs: [{
            employer: "Canadian Tire",
            title: "Content Creator",
            location: "Winnipeg",
            dates: "October 2014 - Present",
            description: "Worked closely with internal teams and external vendors in acquiring" +
                " creating and maintaining engaging visual content for retail stores and mobile phones." +
                " Including Interactive in-store experiences, graphics, animation and video content."
        }, {
            employer: "Elder Creative",
            title: "Senior Art Director",
            location: "Toronto",
            dates: "September 2011 - October 2014",
            description: "Directed the effort to develop creative concepts and implementations in a" +
                " cross-disciplinary manner. Worked with planners and strategists to establish strategic" +
                " and creative approaches for a given assignment. Set the creative direction and" +
                " strategic guidance throughout the duration of client team projects. Executed the" +
                " principles that make innovative and effective digital communication."
        }],
    display: function() {
        var formattedWorkExperience,
            formattedWorkTitle,
            formattedEmployerTitle,
            formattedDates,
            formattedLocation,
            formattedDescription;
        for (item in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            formattedWorkExperience = HTMLworkEmployer.replace("%data%",
                work.jobs[item].employer);
            formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[
                item].title);
            formattedEmployerTitle = formattedWorkExperience +
                formattedWorkTitle;
            formattedDates = HTMLworkDates.replace("%data%", work.jobs[
                item].dates);
            formattedLocation = HTMLworkLocation.replace("%data%", work
                .jobs[item].location);
            formattedDescription = HTMLworkDescription.replace("%data%",
                work.jobs[item].description);
            $(".work-entry:last").append(formattedEmployerTitle,
                formattedDates,
                formattedLocation,
                formattedDescription);
        }
    }
};
var projects = {
    project: [{
        title: "Patio Builder",
        date: "November 2014 - March 2015",
        description: "The Patio Builder’s combination of functionality and simplicity is designed to" +
            " provide users with the tools to create backyard experiences in a few simple steps.",
        image: ["/images/project_image1.jpg",
            "/images/project_image2.jpg"
        ]
    }, {
        title: "Garage Builder",
        date: "June 2015 - October 2015",
        description: "The Garage Builder’s combination of functionality and simplicity is designed to" +
            " provide users with the tools to create garage experiences in a few simple steps.",
        image: ["/images/project_image3.jpg",
            "/images/project_image4.jpg"
        ]
    }],
    display: function() {
        var formattedProjectTitle,
            formattedProjectDate,
            formattedProjectDesc,
            formattedHTMLprojectImage;
        for (item in projects.project) {
            $("#projects").append(HTMLprojectStart);
            formattedProjectTitle = HTMLprojectTitle.replace("%data%",
                projects.project[item].title);
            formattedProjectDate = HTMLprojectDates.replace("%data%",
                projects.project[item].date);
            formattedProjectDesc = HTMLprojectDescription.replace(
                "%data%", projects.project[item].description);
            $(".project-entry:last").append(formattedProjectTitle,
                formattedProjectDate,
                formattedProjectDesc);
            for (image in projects.project[item].image) {
                formattedHTMLprojectImage = HTMLprojectImage.replace(
                    "%data%", projects.project[item].image[image]);
                $(".project-entry:last").append(
                    formattedHTMLprojectImage);
            }
        }
    }
};

function locationizer(work) {
    var locations = [];
    for (var item in work.jobs) {
        locations.push(work.jobs[item].location);
    }
    return locations;
}

bio.display();
work.display();
projects.display();
education.display();
// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);