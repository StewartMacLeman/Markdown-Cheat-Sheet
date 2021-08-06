"use strict";

let contentArray = [
  {
    h3Title: "The Markdown Subject Title",
    paragraphContent: "This is a Paragraph.",
  },
  {
    h3Title: "The Markdown Subject Title",
    paragraphContent: "This is a Paragraph.",
  },
  {
    h3Title: "The Markdown Subject Title",
    paragraphContent: "This is a Paragraph.",
  },
  {
    h3Title: "The Markdown Subject Title",
    paragraphContent: "This is a Paragraph.",
  }
];

// Global variables. ----------------------------------------
let displayContentButton = document.querySelectorAll(".showButton");


// Show the content of each topic. ---------------------------
for (let i = 0; i < displayContentButton.length; i++){
  displayContentButton[i].addEventListener("click", displayContent);
}
//
function displayContent(e){
  let prevElement = e.target.previousElementSibling;
  prevElement.classList.toggle("hide");
  // console.log("Hello from the button!");
}
