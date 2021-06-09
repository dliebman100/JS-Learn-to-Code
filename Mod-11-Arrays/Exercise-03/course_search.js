"use strict";

let data = [{
    CourseId: "19SUM100",
    Title: "Introduction to HTML/CSS/Git",
    Instructor: "Wyatt",
    Location: "Classroom 7",
    StartDate: "07/08/19",
    Fee: 100.00,
  },
  {
    CourseId: "19SUM200",
    Title: "Introduction to JavaScript",
    Instructor: "Lynn",
    Location: "Classroom 8",
    StartDate: "07/22/19",
    Fee: 350.00,
  },
  {
    CourseId: "19SUM300",
    Title: "Introduction to Node.JS and Express",
    Instructor: "Gross",
    Location: "Classroom 4",
    StartDate: "09/09/19",
    Fee: 50.00,
  },
  {
    CourseId: "19SUM400",
    Title: "Introduction to SQL and Databases",
    Instructor: "Wyatt",
    Location: "Classroom 6",
    StartDate: "09/16/19",
    Fee: 50.00,
  },
  {
    CourseId: "19SUM500",
    Title: "Introduction to Angular",
    Instructor: "Lynn",
    Location: "Classroom 7",
    StartDate: "09/23/19",
    Fee: 50.00,
  }
];
//look for course 19SUM300
let courseIdToSearchFor = "19SUM300";
for (let i = 0; i < data.length; i++) {
  if (data[i].CourseId == courseIdToSearchFor) { //data[i] is looking at everything until specified CourseId
    console.log(data[i].Title); //should pluck out "Introduction to Node.JS and Express"
    break;
  }
}

//should pluck out "Introduction to Node.JS and Express"
let foundCourse = data.find(arrayElement => arrayElement.CourseId == courseIdToSearchFor);
if (foundCourse != null) {
  console.log("Found course: " + foundCourse.Title);
} else {
  console.log(courseIdToSearchFor + " was not found");
}

//should pluck out "Introduction to Javascript"
let instructorToLookFor = "Lynn";
foundCourse = data.find(arrayElement => arrayElement.Instructor == instructorToLookFor);
if (foundCourse != null) {
  console.log(instructorToLookFor + " will be teaching " + foundCourse.Title);
} else {
  console.log(instructorToLookFor + " was not found");
}

//should pluck out "Introduction to HTML/CSS/Git"
let maxPriceOfCourse = 100;
foundCourse = data.find(arrayElement => arrayElement.Fee == maxPriceOfCourse);
if (foundCourse != null) {
  console.log(foundCourse.Title);
} else {
  console.log(maxPriceOfCourse + " was not found");
}

//create script that searches a course arr for one with the matching CourseId using find() method
//The course starting "07/22/19" (courseSearch1)
/*
let courseSearch1 = "07/22/19";
let selectedElement1 = data.find(c => c.StartDate == courseSearch1);
  if (selectedElement1 != null) {
    console.log(selectedElement1.Title + " begins  " + selectedElement1.StartDate);
  } else {
    console.log("The item cannot be found");
  }
// The course taught by "Lynn" (courseSearch2)
let courseSearch2 = "Lynn";
let selectedElement2 = data.find(c => c.Instructor == courseSearch2);
  if (selectedElement2 != null) {
    console.log(selectedElement2.Instructor + " will teach " + selectedElement2.Title);
  } else {
    console.log("The item cannot be found");
  }
//The course taught by "Erik" (courseSearch3)
let courseSearch3 = "Erik";
let selectedElement3 = data.find(c => c.Instructor == courseSearch3);
  if (selectedElement3 != null) {
    console.log(selectedElement3.Instructor + " will teach " + selectedElement3.Title);
  } else {
    console.log(courseSearch3 + " cannot be found in this list");
  }
//The course whose ID is "19SUM400" (courseSearch5)
let courseSearch5 = "19SUM400";
let selectedElement5 = data.find(c => c.CourseId == courseSearch5);
  if (selectedElement5 != null) {
    console.log("The course whose ID is " + selectedElement5.CourseId);
  } else {
    console.log("The item cannot be found");
  }
//The course whose ID is "19SUM900" (courseSearch6)
let courseSearch6 = "19SUM900";
let selectedElement6 = data.find(c => c.CourseId == courseSearch6);
  if (selectedElement6 != null) {
    console.log("The course whose ID is " + selectedElement6.CourseId);
  } else {
    console.log(courseSearch6 + " cannot be found in this list");
  }
//The (first) course that costs less that 100.00 (courseSearch4)
let courseCost = data.filter(p => p.Fee < 100.00);
  for (let i = 0; i < courseCost.length; i++) {
    console.log("The courses < $100.00: " + courseCost[i]["CourseId"]);
  }
*/