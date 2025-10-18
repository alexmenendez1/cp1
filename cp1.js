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
commentSection.addEventListener("mouseover", (event) => {
  event.showTooltip("Hey Man");
});
commentSection.addEventListener("mouseout", () => {
  hideTooltip("Toodles");
});

userForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const commentValue = commentSection.value.trim();

  if (!usernameValue || !emailValue || !commentSectionValue) {
    alert('Please fill in all fields.');
    return;
  }
});

