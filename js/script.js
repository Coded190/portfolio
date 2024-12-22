//selecting html elements
//attaching 'click listener'
//getting user entered values 
//javascript validations

let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");
let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if (emailValue.includes('@')) {
        //all good
        alert("Email is valid. Thank you for your message");
    }
    else {
        alert("Email is not valid. Please enter a valid email address");
    }
})

// function to redirect to another page. Usually used after form submission.
function redirectToPage(url) {
    window.location.href = url;
}




//alert("Hello, World!")

