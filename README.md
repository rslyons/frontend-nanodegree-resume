## What is this project?

It's a demonstration project for using JSON data and JavaScript functions to create a resume. 
Generated as part of a Udacity course on JavaScript.

### By the end:
Your resume will look something like this
![](http://i.imgur.com/pWU1Xbl.png)

## Project tasks
1. Built four JSONs, each one representing a different resume section. The objects needed to follow the names within the schema below exactly. Made sure the JSONs were formatted correctly using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterated through each JSON and appended its information to index.html in the correct section.
 * Using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. 
 * Using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from the resume JSONs.
 * Example of some code that added the location of one my companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
 * Used the mockup at the page of this document as a guide for the order in which you should append elements to the page.
3. The resume includes an interactive map. 
4. All of the code for adding elements to the resume is within functions. And all of the functions are encapsulated within the same objects containing the resume data. For instance, the functions for appending work experience elements to the page are found within the same object containing data about my work experience.
5. Include `console.log()` information about click locations. 
6. Include additional information when clicking on the map pins.
