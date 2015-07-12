var name = "Hyewon Shin"
var formattedName = HTMLheaderName.replace(
  "%data%", name);
var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace(
  "%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var mobile = "718-537-3900"
var formattedmobile = HTMLmobile.replace(
  "%data%", mobile);
$("#topContacts").append(formattedmobile)

var email = "graceshin@hotmail.com"
var formattedemail = HTMLemail.replace(
  "%data%", email);
$("#topContacts").append(formattedemail)

var twitter = "@shin"
var formattedtwitter = HTMLtwitter.replace(
  "%data%", twitter);
$("#topContacts").append(formattedtwitter)

var github = "hshin987"
var formattedgithub = HTMLgithub.replace(
  "%data%", github);
$("#topContacts").append(formattedgithub)

var location = "New York"
var formattedlocation = HTMLlocation.replace(
  "%data%", location);
$("#topContacts").append(formattedlocation)



var bio = {
  "name": "Hyewon Shin",
  "role": "Web Developer",
  "contact": {
    "mobile": "718-537-3900",
    "email": "graceshin@hotmail.com",
    "twitter": "@shin",
    "github": "hshin987",
    "location": "New York",
  },
  "welcomeMessage": "Hello.",
  "skills": [
    "soccer", "trumpet", "piano", "sleeping", "somewhatcoding"
  ],
  "bioPic": "images/fry.jpg"
}

var education = {
  "schools": [
  {
    "name": "Bayside High School",
    "city": "Bayside, NY, US",
    "degree": "N/A",
    "major": ["Environmental Engineering"],
    "dates": 2015,
    "url": "http://udacity.com"
  }
 ],
 "onlineCourses": [
  {
    "title": "Front-end Nanodegree",
    "school": "Udacity",
    "dates": 2015,
    "url": "http://www.udacity.com"
  }
 ]
}

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "Software Engineer",
      "dates": "Now to Future",
      "description": "Be the best"
    }
  ]
}


var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2015",
      "description": "My resume",
      "images": [
        "http://"
      ]
    }
  ]
}


