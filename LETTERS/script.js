function storeAndSubmit() {
    // Get the text from the textarea
    var text = document.getElementById("textInput").value;

    var characters = text.length;

    // Count the number of words
    var words = text.trim().split(/\s+/).filter(Boolean).length;

    // Count the number of numbers
    var numbers = text.match(/\d/g) ? text.match(/\d/g).length : 0;

    // Log data to console to verify it's working
    console.log("Characters:", characters);
    console.log("Words:", words);
    console.log("Numbers:", numbers);

    // Store the results in localStorage
    localStorage.setItem('characters', characters);
    localStorage.setItem('words', words);
    localStorage.setItem('numbers', numbers);

    // Redirect to the submit page
    window.location.href = 'submit2.html';
}
