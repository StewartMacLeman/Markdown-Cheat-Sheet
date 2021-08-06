"use strict";

let contentArray = [
  {
    h3Title: "How to make a Header",
    h4CodeTitle: "The Code:",
    code: "# This is a Header",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./spare/header.png",
    imgAlt: "An example of what a main header looks like."
  },
  {
    h3Title: "How to make a Sub-Heading",
    h4CodeTitle: "The Code:",
    code: "## This is a Sub-Heading",
    h4OutcomeTitle: "The Outcome:",
    imgSrc: "./spare/sub-heading.png",
    imgAlt: "An example of what a main header looks like."
  },
];

// Global variables. ----------------------------------------------
let mainContainer = document.getElementById("mainCont");

// Create the topic sections to be added to the main element. ------

function createSections(){
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
}

createSections();

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
