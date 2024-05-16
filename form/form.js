// Get the input element
var passageInput = document.getElementById('passageInput');
// Get the element where word count will be displayed
var wordCountElement = document.getElementById('wordCount');

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
    wordCountElement.textContent = 'Word count: ' + wordCount;
    console.log(wordCount);
}

// Add event listener to the input field
passageInput.addEventListener('input', updateWordCount);

// Update word count initially
updateWordCount();

var form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
});