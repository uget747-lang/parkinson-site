// script.js

// Function to display current date and time in UTC
function displayCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toUTCString();
    // Formatting the date as YYYY-MM-DD HH:MM:SS
    const formattedDateTime = utcDateTime.replace(/(.*), (.*) GMT/, '$1 $2');
    return formattedDateTime;
}

// Function to set the date and time to a designated HTML element
function setDateTimeToElement(elementId) {
    const dateTime = displayCurrentDateTime();
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = dateTime;
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}

// Example: Set the current date and time to an element with ID 'datetime'
setDateTimeToElement('datetime');
