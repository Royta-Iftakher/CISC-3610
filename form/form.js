// Get the input element
var passageInput = document.getElementById('passageInput');
// Get the element where word count will be displayed
var wordCountElement = document.getElementById('wordCount');
// Get the WPM input element
var wpmInput = document.getElementById('wpmInput');
// Get the Calculate button
var calculateButton = document.getElementById('calculateButton');

var finalWordCount;
// Function to update word count
function updateWordCount() {
    // Get the value of the input field
    var passage = passageInput.value;
    // Split the passage into words by spaces
    var words = passage.trim().split(/\s+/).filter(function(word) {
        return word.length > 0; // Filter out empty strings
    });
    // Count the number of words
    var wordCount = words.length;
    // Update the word count element with the new count
    wordCountElement.textContent = 'Word Count: ' + wordCount;
    console.log(wordCount);
    finalWordCount = wordCount;
    // Check inputs to enable/disable the Calculate button
    checkInputs();
}

// Add event listener to the input field
passageInput.addEventListener('input', updateWordCount);

// Update word count initially
updateWordCount();

// Get the form elements
var form = document.querySelector('form');
// var wpmForm = document.querySelector('.step-2 form');

// Add event listeners to prevent form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
});

// Function to save WPM
function saveWPM() {
    var wpmValue = wpmInput.value.trim();
    // Save the WPM value to a cookie
    setCookie('WPM', wpmValue, 30); // Adjust name, value, and expiry as needed
}

// Add event listener to save WPM button
document.getElementById('saveWPMButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button click behavior
    saveWPM(); // Call the function to save WPM
});

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Function to reset a cookie
function resetCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

// Add event listener to reset WPM button
document.getElementById('resetWPM').addEventListener('click', function() {
    // Call the resetCookie function to remove the cookie
    resetCookie('WPM'); // Adjust the name of the cookie you want to reset
});

// Function to check if all required fields are filled
function checkInputs() {
    var passageFilled = passageInput.value.trim() !== '';
    var wpmFilled = wpmInput.value.trim() !== '';
    // Enable the Calculate button if all required fields are filled
    calculateButton.disabled = !(passageFilled && wpmFilled);
}

passageInput.addEventListener('input', checkInputs);
wpmInput.addEventListener('input', checkInputs);


function displayResult(words_per_minute, totalTime) {
    var totalMinutes = Math.floor(totalTime);
// Calculate remaining seconds
    var remainingSeconds = Math.round((totalTime - totalMinutes) * 60);

    // Create a new div element for the rectangle
    var resultDiv = document.createElement('div');
    // Set the class for styling
    resultDiv.className = 'result';
    // Set the text content
    resultDiv.innerHTML = '<div><b>WPM:</b> ' + words_per_minute + ' <i>words per minute</i>' + '</div>' +
                      '<div><b>Word Count:</b> ' + finalWordCount + ' <i>words</i>' + '</div>' +
                      '<div><b>Average time it takes to read passage:</b> ' + totalMinutes + ' <i>min</i> ' + remainingSeconds + ' <i>s</i></div>';

    // Insert the rectangle below the calculate button
    calculateButton.parentNode.insertBefore(resultDiv, calculateButton.nextSibling);
}

calculateButton.addEventListener('click', function(event) {
    // Check if all required fields are filled
    event.preventDefault();
    if (passageInput.value.trim() !== '' && wpmInput.value.trim() !== '') {
        // Call the function to display the result
        calculateResult();
    }
});

function calculateResult() {
    // Get the values from input fields
    var words = finalWordCount;
    var words_per_minute;
    if(getCookie('WPM') != 'null'){
        words_per_minute = getCookie('WPM');
    } else {
        var words_per_minute = wpmInput.value.trim();
    }
    // Perform calculation and display the result
    // For example:
    var totalTime = words/words_per_minute;
    displayResult(words_per_minute, totalTime);
}

