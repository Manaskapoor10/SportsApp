// registration.js

const form = document.getElementById("registrationForm");

const popup = document.getElementById("successPopup");

const closePopup = document.getElementById("closePopup");


// FORM SUBMIT

form.addEventListener("submit", function(e){

    e.preventDefault();

    // GET VALUES

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const sport = document.getElementById("sport").value;
    const experience = document.getElementById("experience").value;
    const address = document.getElementById("address").value;

    // VALIDATION

    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        age === "" ||
        sport === "" ||
        experience === "" ||
        address === ""
    ){
        alert("Please fill all fields.");
        return;
    }

    // PHONE VALIDATION

    if(phone.length < 10){

        alert("Enter a valid phone number.");
        return;

    }

    // SHOW POPUP

    popup.classList.add("active");

    // RESET FORM

    form.reset();

});


// CLOSE POPUP

closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

});


// CLOSE POPUP WHEN CLICK OUTSIDE

window.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.classList.remove("active");

    }

});


// INPUT ANIMATION EFFECT

const inputs = document.querySelectorAll(
    ".input-box input, .textarea-box textarea"
);

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.boxShadow =
        "0 0 15px rgba(0,247,255,0.5)";

    });

    input.addEventListener("blur", () => {

        input.style.boxShadow = "none";

    });

});


// BUTTON RIPPLE EFFECT

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("mouseenter", () => {

    submitBtn.style.transform = "scale(1.03)";

});

submitBtn.addEventListener("mouseleave", () => {

    submitBtn.style.transform = "scale(1)";

});


// PAGE LOAD ANIMATION

window.addEventListener("load", () => {

    document.querySelector(".registration-container")
    .style.opacity = "1";

});