let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");
let submitButton = document.querySelector("#submit-button");


submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    let emailValue = emailElement.value;
    let messageValue = messageElement.value;
    
    if (!emailValue.includes('@')) {
        alert("Email is not valid. Please enter a valid email address");
    }
    else{
        alert("Email function coming soon!");
    }
})

document.getElementById("submit-button").addEventListener("click", function () {
    alert("Email function coming soon!");
});

// Function to validate the email form
function validateForm() {
  const email = document.getElementById("email");
  if (!email.value.includes("@")) {
      email.style.borderColor = "red";
      return false;
  }
  return true;
}


// function to redirect to another page. Usually used after form submission.
function redirectToPage(url) {
    window.location.href = url;
}

// Array to store project and details
const projects = [
    { title: "Portfolio", description: "A personal portfolio website." },
    { title: "Calorie Tracker", description: "An app to track calorie intake." },
];
  
// Loop through the array and display the projects
projects.forEach(project => {
    document.getElementById("project-list").innerHTML += `
        <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        </div>
    `;
});
  
// Function to toggle the navigation menu
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle('active');
}