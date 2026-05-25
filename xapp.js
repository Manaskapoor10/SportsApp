// MOBILE NAVBAR

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// CLOSE MENU WHEN CLICKING NAV LINKS

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// NAVBAR BACKGROUND ON SCROLL

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    }
    else{
        header.style.background = "rgba(0,0,0,0.4)";
        header.style.boxShadow = "none";
    }

});


// SPORTS CARD HOVER ANIMATION

const sportCards = document.querySelectorAll(".sport-card");

sportCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) scale(1)";
    });

});


// OFFER CARD ANIMATION

const offerCards = document.querySelectorAll(".offer-card");

offerCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.07)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".sport-card, .offer-card, .achievement-card, .news-card, .contact-box"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

}


// INITIAL STYLES FOR REVEAL EFFECT

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// HERO BUTTON GLOW EFFECT

const heroButtons = document.querySelectorAll(
    ".btn-primary, .btn-secondary"
);

heroButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
            "0 0 20px rgba(0,247,255,0.8)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});


// AUTO ACTIVE NAV LINK ON SCROLL

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active-link");

        }

    });

});


// TYPING EFFECT FOR HERO TITLE

const heroTitle = document.querySelector(".hero-content h1");

const text = "Train Like A Champion";

let index = 0;

function typeEffect(){

    heroTitle.innerHTML = text.slice(0, index);

    index++;

    if(index <= text.length){

        setTimeout(typeEffect, 120);

    }

}

window.addEventListener("load", () => {

    heroTitle.innerHTML = "";
    typeEffect();

});


// PARALLAX EFFECT FOR HERO SECTION

const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let scrollPosition = window.pageYOffset;

    heroSection.style.backgroundPositionY =
        scrollPosition * 0.5 + "px";

});


// NEWS CARD IMAGE ZOOM EFFECT

const newsImages = document.querySelectorAll(".news-card img");

newsImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.1)";
        image.style.transition = "0.5s";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


// SMOOTH SCROLL EFFECT

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// DYNAMIC YEAR IN FOOTER

const copyright =
document.querySelector(".copyright");

const currentYear = new Date().getFullYear();

copyright.innerHTML =
`© ${currentYear} OutShine Sports Academy | All Rights Reserved`;





// testing underway           yuhoooooo.
// main.js

// NAVBAR

ScrollReveal().reveal('.navbar',{

    distance:'80px',
    duration:2000,
    delay:200,
    origin:'top'

});


// HERO SECTION

ScrollReveal().reveal('.hero-content h1',{

    distance:'100px',
    duration:2000,
    delay:300,
    origin:'left'

});

ScrollReveal().reveal('.hero-content p',{

    distance:'100px',
    duration:2000,
    delay:500,
    origin:'right'

});

ScrollReveal().reveal('.join-btn',{

    distance:'80px',
    duration:2000,
    delay:700,
    origin:'bottom'

});


// SECTION TITLES

ScrollReveal().reveal('.section-title',{

    distance:'80px',
    duration:2000,
    delay:200,
    origin:'bottom'

});


// GALLERY

ScrollReveal().reveal('.gallery-card',{

    distance:'100px',
    duration:2000,
    delay:200,
    interval:200,
    origin:'bottom'

});


// TRAINING CARDS

ScrollReveal().reveal('.training-card',{

    distance:'100px',
    duration:2000,
    delay:200,
    interval:200,
    origin:'left'

});


// ACHIEVEMENT BOXES

ScrollReveal().reveal('.achievement-box',{

    distance:'100px',
    duration:2000,
    delay:200,
    interval:200,
    origin:'top'

});


// COACH CARDS

ScrollReveal().reveal('.coach-card',{

    distance:'100px',
    duration:2000,
    delay:200,
    interval:200,
    origin:'bottom'

});


// STUDENT CARDS

ScrollReveal().reveal('.student-card',{

    distance:'100px',
    duration:2000,
    delay:200,
    interval:200,
    origin:'right'

});


// FOOTER

ScrollReveal().reveal('footer',{

    distance:'100px',
    duration:2000,
    delay:200,
    origin:'bottom'

});