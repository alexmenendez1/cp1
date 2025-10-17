
const entry = document.createElement('div');
entry.textContent = commentSection.value;
commentSection.value = ""; // clears after submit
document.getElementById('feedbackArea').appendChild(entry);

const addProductButton = document.getElementById('addButton')
addProductButton.addEventListener('click', function() =>{
   entry.textContent = "Feedback recorded. Thank you!";

}


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
