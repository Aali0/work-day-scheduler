JQuery Workday Scheduler

A simple application that allows users to save events for each hour of their day. This app will run in the browser and featured dynamically updated CSS and JS.

Utilities: 
    [Moment.js](https://momentjs.com/)
    JQuery CDN
    Bootstrap

A base calendar page that displays the current day at the top and a "table" of times bellow
    -Build on html to add calendar table
    -Use jquery to query elements and store in variables

In the table are time blocks for standard business hours
    -Input static time blocks in html

Time blocks need to be color coated to indicate past, present, or future
    <!-- -Look in to method to style dynamically or color coat with conditionals -->

Time blocks need to take in input for event
    -Add jquery event listeners to time block inputs
    -Use jquery to create dynamic forms to input event

Need to save event to local storage
    -Add on click methods to save button
    -save to local storage so schedule data persists
