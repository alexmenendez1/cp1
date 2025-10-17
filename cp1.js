
const entry = document.createElement('div');
entry.textContent = commentSection.value;
commentSection.value = ""; // clears after submit
document.getElementById('feedbackArea').appendChild(entry);

// const addProductButton = document.getElementById('addButton')
// addProductButton.addEventListener('click', function() =>{
//    entry.textContent = "Feedback recorded. Thank you!";

// }

// 1. Select the key elements from your HTML
const addProductButton = document.getElementById('addButton');
const commentSection = document.getElementById('commentSection');
const feedbackArea = document.getElementById('feedbackArea');

// 2. Add the click event listener
addProductButton.addEventListener('click', function () {
  // Create a new <div> for the feedback
  const entry = document.createElement('div');
  entry.textContent = commentSection.value;

  // Clear the text area for new input
  commentSection.value = "";

  // Append the new entry to the feedback area
  feedbackArea.appendChild(entry);
});

commentSection.addEventListener("mouseover", () => {
  console.log("Mouse is over the comment box!");
});
commentSection.addEventListener("mouseout", () => {
  console.log("Mouse is out of the comment box!");
});


// const contentDiv= document.getElementById("content");
// const firstMessage = document.querySelector('.message')

// const nameAndEmail = document.querySelectorAll('#serviceInput')
// const commmentSection = document.getElementById('commentSection')




    

// const nameInput = document.getElementByID("username");

// const emailInput = document.querySelector("#email");
// const messageInput = document.querySelector("#comments")

// const entry =document.createElement("div");
// entry.textContent= "Feedback recorded. Thank you!";
// document.getElementById("Feedback-display").appendChild(entry);
