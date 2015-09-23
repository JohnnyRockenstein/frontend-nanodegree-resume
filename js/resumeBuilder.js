"use strict";
var bio = {
    "name": "Dustin Horrock",
    "role": "Content Creator",
    "contacts": {
        "mobile": "2048808655",
        "email": "dustinhorrock@gmail.com",
        "github": "JohnnyRockenstein",
        "twitter": "@dustinhorrock",
        "location": "Winnipeg, Manitoba"
    },
    "welcomeMessage": "Welcome! Here you will find information about me.",
    "skills": ["Design", "Interactive", "Retail"],
    "biopic": "images/dustin.jpg",
    "display": function () {
        var data = "%data%";
        var formattedSkill;
        var formattedHTMLheaderName = HTMLheaderName.replace(data, bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace(data, bio.role);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        var formattedHTMLbioPic = HTMLbioPic.replace(data, bio.biopic);
        $("#header").prepend(formattedHTMLheaderName, formattedHTMLheaderRole);
        $("#header").append(formattedHTMLwelcomeMsg, formattedHTMLbioPic);
        var formattedHTMLmobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace(data, bio.contacts.email);
        var formattedHTMLtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        var formattedHTMLgithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedHTMLlocation = HTMLlocation.replace(data, bio.contacts.location);
        $("#topContacts,#footerContacts").append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLtwitter, formattedHTMLgithub, formattedHTMLlocation);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(entry) {
            formattedSkill = HTMLskills.replace(data, entry);
            $("#skills").append(formattedSkill);
        });
    }
};
var education = {
    "schools": [{
        "name": "University of Manitoba",
        "location": "Winnipeg",
        "degree": "Bachelor of Fine Arts",
        "majors": ["Design", "Photography"],
        "dates": "September 2001 - May 2005",
        "url": "http://umanitoba.ca/student/admissions/programs/fine-arts.html"
    }, {
        "name": "University of Manitoba",
        "location": "Winnipeg",
        "degree": "Bachelor of Fine Arts Thesis",
        "majors": ["Videography"],
        "dates": "September 2005 - May 2006",
        "url": "http://umanitoba.ca/schools/art/undergrad/index.html"
    }],
    "onlineCourses": [{
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": "September 2015",
        "url": "http://www.udacity.com/course/ud804"
    }, {
        "title": "Intro to HTML & CSS",
        "school": "Udacity",
        "dates": "September 2015",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }],
    "display": function () {
        var data = "%data%";
        var thisSchool;
        var thisOnlineCourse;
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
            formattedTitleWithSchool,
            i;
        for (i = 0; i < education.schools.length; i += 1) {
            thisSchool = education.schools[i];
            $("#education").append(HTMLschoolStart);
            formattedHTMLschoolName = HTMLschoolName.replace(data, thisSchool.name)
                .replace("#", thisSchool.url);
            formattedHTMLschoolDegree = HTMLschoolDegree.replace(data, thisSchool.degree);
            formattedNameWithDegree = formattedHTMLschoolName + formattedHTMLschoolDegree;
            formattedschoolDates = HTMLschoolDates.replace(data, thisSchool.dates);
            formattedHTMLschoolLocation = HTMLschoolLocation.replace(data, thisSchool.location);
            formattedHTMLschoolMajor = HTMLschoolMajor.replace(data, thisSchool.majors);
            $(".education-entry:last").append(formattedNameWithDegree, formattedschoolDates, formattedHTMLschoolLocation, formattedHTMLschoolMajor);
        }
        $("#education").append(HTMLonlineClasses);
        for (i = 0; i < education.onlineCourses.length; i += 1) {
            thisOnlineCourse = education.onlineCourses[i];
            $("#education").append(HTMLschoolStart);
            formattedHTMLonlineTitle = HTMLonlineTitle.replace(data, thisOnlineCourse.title)
                .replace("#", thisOnlineCourse.url);
            formattedHTMLonlineSchool = HTMLonlineSchool.replace(data, thisOnlineCourse.school);
            formattedHTMLonlineDates = HTMLonlineDates.replace(data, thisOnlineCourse.dates);
            formattedHTMLonlineURL = HTMLonlineURL.replace(data, thisOnlineCourse.url)
                .replace("#", thisOnlineCourse.url);
            formattedTitleWithSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;
            $(".education-entry:last").append(formattedTitleWithSchool, formattedHTMLonlineDates, formattedHTMLonlineURL);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Canadian Tire",
        "title": "Content Creator",
        "location": "Winnipeg",
        "dates": "October 2014 - Present",
        "description": "Worked closely with internal teams and external vendors in acquiring" +
                " creating and maintaining engaging visual content for retail stores and mobile phones." +
                " Including Interactive in-store experiences, graphics, animation and video content."
    }, {
        "employer": "Elder Creative",
        "title": "Senior Art Director",
        "location": "Toronto",
        "dates": "September 2011 - October 2014",
        "description": "Directed the effort to develop creative concepts and implementations in a" +
                " cross-disciplinary manner. Worked with planners and strategists to establish strategic" +
                " and creative approaches for a given assignment. Set the creative direction and" +
                " strategic guidance throughout the duration of client team projects. Executed the" +
                " principles that make innovative and effective digital communication."
    }],
    "display": function () {
        var data = "%data%";
        var formattedWorkExperience,
            formattedWorkTitle,
            formattedEmployerTitle,
            formattedDates,
            formattedLocation,
            formattedDescription,
            thisWork,
            i;
        for (i = 0; i < work.jobs.length; i += 1) {
            thisWork = work.jobs[i];
            $("#workExperience").append(HTMLworkStart);
            formattedWorkExperience = HTMLworkEmployer.replace(data, thisWork.employer);
            formattedWorkTitle = HTMLworkTitle.replace(data, thisWork.title);
            formattedEmployerTitle = formattedWorkExperience + formattedWorkTitle;
            formattedDates = HTMLworkDates.replace(data, thisWork.dates);
            formattedLocation = HTMLworkLocation.replace(data, thisWork.location);
            formattedDescription = HTMLworkDescription.replace(data, thisWork.description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
        }
    }
};
var projects = {
    "project": [{
        "title": "Patio Builder",
        "date": "November 2014 - March 2015",
        "description": "The Patio Builder’s combination of functionality and simplicity is designed to" +
                " provide users with the tools to create backyard experiences in a few simple steps.",
        "image": ["images/project_image1.jpg", "images/project_image2.jpg"]
    }, {
        "title": "Garage Builder",
        "date": "June 2015 - October 2015",
        "description": "The Garage Builder’s combination of functionality and simplicity is designed to" +
                " provide users with the tools to create garage experiences in a few simple steps.",
        "image": ["images/project_image3.jpg", "images/project_image4.jpg"]
    }],
    "display": function () {
        var data = "%data%";
        var formattedProjectTitle,
            formattedProjectDate,
            formattedProjectDesc,
            formattedHTMLprojectImage,
            thisProject,
            i;
        for (i = 0; i < projects.project.length; i += 1) {
            thisProject = projects.project[i];
            $("#projects").append(HTMLprojectStart);
            formattedProjectTitle = HTMLprojectTitle.replace(data, thisProject.title);
            formattedProjectDate = HTMLprojectDates.replace(data, thisProject.date);
            formattedProjectDesc = HTMLprojectDescription.replace(data, thisProject.description);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDate, formattedProjectDesc);
            thisProject.image.forEach(function(entry) {
                formattedHTMLprojectImage = HTMLprojectImage.replace(data, entry);
                $(".project-entry:last").append(formattedHTMLprojectImage);
            });
        }
    }
};

function locationizer(work) {
    var locations = [];
    for (item in work.jobs) {
        locations.push(work.jobs[item].location);
    }
    return locations;
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);