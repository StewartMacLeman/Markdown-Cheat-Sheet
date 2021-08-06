"use strict";

// Global variables. -------------------------------------------------
let mainContainer = document.getElementById("mainCont");

let contentArray = [
  {
    h3Title: "H1 Heading",
    h4CodeTitle: "The Code:",
    code: "# This is an h1 Heading",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/h1_header.png",
    imgAlt: "An example of what an h1 header looks like."
  },
  {
    h3Title: "H2 Heading",
    h4CodeTitle: "The Code:",
    code: "## This is an h2 Heading",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/h2_header.png",
    imgAlt: "An example of what an h2 header looks like."
  },
  {
    h3Title: "H3 Heading",
    h4CodeTitle: "The Code:",
    code: "### This is an h3 Heading",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/h3_header.png",
    imgAlt: "An example of what an h3 header looks like."
  },
  {
    h3Title: "Normal Text",
    h4CodeTitle: "The Code:",
    code: "This is some normal text!",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/normal_text.png",
    imgAlt: "An example of what normal text looks like."
  },
  {
    h3Title: "Bold Text",
    h4CodeTitle: "The Code:",
    code: "**This is some bold text!**",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/bold_text.png",
    imgAlt: "An example of what bold text looks like."
  },
  {
    h3Title: "Italicized Text",
    h4CodeTitle: "The Code:",
    code: "*This is some italicized text!*",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/italicized_text.png",
    imgAlt: "An example of what italicized text looks like."
  },
  {
    h3Title: "An Ordered List",
    h4CodeTitle: "The Code:",
    code: "1. An Ordered List",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/ordered_list.png",
    imgAlt: "An example of what an ordered list looks like."
  },
  {
    h3Title: "An Unordered List",
    h4CodeTitle: "The Code:",
    code: "- An Unordered List",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/unordered_list.png",
    imgAlt: "An example of what an unordered list looks like."
  },
  {
    h3Title: "A Horizontal Line",
    h4CodeTitle: "The Code:",
    code: "---",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/horizontal_line.png",
    imgAlt: "An example of what a horizontal line looks like."
  },
  {
    h3Title: "Images",
    h4CodeTitle: "The Code:",
    code: "![Thumbs Up](images/thumbsUp.JPG)",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/thumbsUp.JPG",
    imgAlt: "An example of an image."
  },
  {
    h3Title: "Links",
    h4CodeTitle: "The Code:",
    code: "[A Link Example](https://alinkexample.com)",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./images/link.png",
    imgAlt: "An example of a link."
  }
];

// Creates the topic sections to be added to the main container. ------

(function createSections(){
  for (let i = 0; i < contentArray.length; i++){
    // The div to be attached to the main.----------
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("mkTopicCont");

    // The h3 title to be attached to the outerDiv;
    let h3Title = document.createElement("h3");
    let h3Text = document.createTextNode(`${contentArray[i].h3Title}`);
    h3Title.appendChild(h3Text);

    // The hide div to be attached to the outerDiv;
    let hideDiv = document.createElement("div");
    hideDiv.classList.add("hide");

    // The h4 code title, to be attached to the hide div.
    let h4CodeTitle = document.createElement("h4");
    let h4CodeText = document.createTextNode(`${contentArray[i].h4CodeTitle}`);
    h4CodeTitle.appendChild(h4CodeText);
    // The code example, to be attached to the hide div.
    let codeDiv = document.createElement("div");
    codeDiv.classList.add("codeCont");
    let codeEl = document.createElement("code");
    let codeContent = document.createTextNode(`${contentArray[i].code}`);
    codeEl.appendChild(codeContent);
    codeDiv.appendChild(codeEl);
    // The h4 outcome title, to be attached to the hide div.
    let h4OutcomeTitle = document.createElement("h4");
    let h4OutcomeText = document.createTextNode(`${contentArray[i].h4OutcomeTitle}`);
    h4OutcomeTitle.appendChild(h4OutcomeText);
    // The image example, to be attached to the hide div.
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("outcomeImage");
    let imageEl = document.createElement("img");
    imageEl.setAttribute("src", `${contentArray[i].imgSrc}`);
    imageEl.setAttribute("alt", `${contentArray[i].imgAlt}`);
    imageDiv.appendChild(imageEl);

    // The button to show / hide the code examples.
    let showButton = document.createElement("button");
    let buttonText = document.createTextNode("Show Content");
    showButton.appendChild(buttonText);
    showButton.addEventListener("click", displayContent);

    // The hideDiv attachments.
    hideDiv.appendChild(h4CodeTitle);
    hideDiv.appendChild(codeDiv);
    hideDiv.appendChild(h4OutcomeTitle);
    hideDiv.appendChild(imageDiv);

    outerDiv.appendChild(h3Title);
    outerDiv.appendChild(hideDiv);
    outerDiv.appendChild(showButton);

    mainContainer.appendChild(outerDiv);
  }
})();

// Show the content of each topic. ---------------------------------
function displayContent(e){
  let prevElement = e.target.previousElementSibling;
  prevElement.classList.toggle("hide");

  let button = e.target;
  let buttonText = e.target.textContent;
  let hide = "Hide Content";
  let show = "Show Content";

  if ( buttonText == "Show Content" ){
    button.textContent = hide;
  } else if ( buttonText == "Hide Content" ){
    button.textContent = show;
  }
}
