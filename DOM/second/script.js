let heading = document.getElementsByClassName("heads");
console.log(heading[1].textContent);
console.dir(heading[0]);
// console.dir(window.document.body);
let heading2 = document.getElementsByTagName("h1")[0].tagName;
// Fetch all elements with the class "heads"
const headers = document.querySelectorAll('.heads');

// Iterate through each element and log its HTML content
headers.forEach(header => {
    console.log(header.outerHTML); // Logs the full HTML of each <h1> element
});

// Fetch and log the inner HTML content (only the text inside the tags)
headers.forEach(header => {
    console.log(header.innerHTML); // Logs the text content like "hari 1", "hari 2", etc.
});

