// Gather DOM elements
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const commentSection = document.getElementById('commentSection');
const addButton = document.getElementById('addButton');
const feedbackDisplay = document.getElementById('feedbackDisplay');
const countDisplay = document.getElementById("charCount");



// Add the click event listener
addButton.addEventListener('click', function () {
  const entry = document.createElement('div');
  entry.textContent = commentSection.value;
  commentSection.value = "";
  feedbackDisplay.appendChild(entry);
});

// Count characters
commentSection.addEventListener("input", () => {
countDisplay.textContent = "Characters: " + commentSection.value.length;
});

// Mouse over and mouse out

commentSection.addEventListener("mouseover", () => {
  showTooltip("Hey Man");
});
commentSection.addEventListener("mouseout", () => {
  hideTooltip();
});

userForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const usernameValue = username.value;
  const emailValue = email.value;
  const commentSectionValue = commentSection.value;

  if (!usernameValue || !emailValue || !commentSectionValue) {
    alert('Please fill in all fields.');
    return;
  }
});

document.querySelector('#userForm').addEventListener('click', (e) => {
  if (e.target.matches("input, textarea")) {
console.log("Interacting with:" + e.target.id);
e.stopPropagation();
  }
});
