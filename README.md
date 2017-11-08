# CCNY Chemistry Lab Platform

This project is to provide a portal designed to facilitate a variety of safety-related services at CCNY laboratories.
This includes but is not limited to: 
* Collection of hazardous waste 
* Laboratory inspections 
* Safety training 
* Distribution of safety supplies 

The finished product will be deployed using the Angular framework, with ASP.NET serving as our backend, however this repository will be using different backend technologies. The reason for this is comfortability with JavaScript and other front end frameworks.

## Technologies
This rough draft is using what is known as a MEAN stack, which uses the following technologies:
+ MongoDB
  * A NOSQL Database that uses JSON formatting to represent data  
+ ExpressJS
  * An HTTP server framework that facilitates 
+ Angular 2
  * Front end framework deigned and maintained by Google Inc.
+ NodeJS 
  * This is a JavaScript run-time environment for executing server-side scripts using native JavaScript, it is commonly used for web development purposes  

The process flow of the the MEAN stack is shown in the photo below:
![alt text](https://excellentwebworld.com/wp-content/uploads/2017/09/images-3.jpg "MEAN Process - Anchal Malik")

## Prerequisites
As we can see from the diagram above, knowledge of **JavaScript** is essential in order to follow this. 
You don't necessarily need the backend files in order to use the client source code, but if you do, you need the **npm** utility, as you need to download certain NodeJS modules that will aid with the backend side of things. As just mentioned, the client code is stored inside the *client/* folder. 

##  Front End Development
1. Download Angular 2, the most efficient way to do this is through the command land interface located [here](https://cli.angular.io/). This interface makes it super easy to create components, directives, services, (i.e. an Angular project). I mean, you can create component, services, etc. manually, but honestly thats a waste of time if you have something that will do it for you.
2. Clone this repository, then navigate to it through your terminal/console. You should be somewhere that looks like: ` ~/../client/`.
   Navigate to the actual Angular project: `cd lab-platorm`. Then we can start our development server provided by Angular:
   `ng serve`.
   
   This will load the client code on your default browser. Now when you alter the content, the changes will reflect on the page, as it normally would in any Angular project. And that should be it!
 
