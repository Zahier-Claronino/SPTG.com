const images = [
    "S1.jpg",
    "S2.jpg",
    "S3.jpg",
    "S4.png",
    "home-background1.jpg"
];

let currentIndex = 0;
const homeSection = document.querySelector(".home");
const overlay = document.querySelector(".overlay");

function changeImage() {
    // Fade to black
    overlay.classList.add("fade-out");

    setTimeout(() => {
        // Change the background image
        currentIndex = (currentIndex + 1) % images.length;
        homeSection.style.backgroundImage = `url('${images[currentIndex]}')`;

        // Fade back in
        setTimeout(() => {
            overlay.classList.remove("fade-out");
        }, 200);
    }, 500);
}

// Change image every 3 seconds
setInterval(changeImage, 4000);


const menu = document.getElementById('menu');

menu.style.opacity = '0';

const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');

menu.style.zIndex = "1";



function showMenu(){
    line2.style.opacity = '0';

    hamburgerButton.style.position = 'relative';

    line1.style.position = 'absolute';
    line2.style.position = 'absolute';
    line3.style.position = 'absolute';

    line1.style.transform = 'rotate(45deg)';
    line3.style.transform = 'rotate(-45deg)'; 
    menu.style.zIndex = "5";
    menu.style.opacity = '1';
    menu.style.animation = 'none';



    menu.style.animation = 'slideIn 0.3s ease-in-out';
    setTimeout(function(){

    isMenuOpen = true;
    }, 300);

}

function hideMenu(){

    menu.style.animation = 'slideOut 0.3s ease-in-out';
    line1.style.position = 'static';
    line2.style.position = 'static';
    line3.style.position = 'static';

    line2.style.opacity = '1';

    line1.style.transform = 'none';
    line3.style.transform = 'none';



    setTimeout(function(){
    menu.style.opacity = '0';
    menu.style.zIndex = "1";
    isMenuOpen = false;
    }, 250);
};



line2.style.opacity = '1';
let isMenuOpen = false;



hamburgerButton.addEventListener('click', function(){
    if(!isMenuOpen){
        showMenu();


    }
    else{
        hideMenu();

    }

});

const homeButton = document.getElementById('home');
const servicesButton = document.getElementById('services');
const aboutButton = document.getElementById('about-us');
const contactButton = document.getElementById('contact-us');

const getQuote = document.getElementById('get-a-quote');


const servicesSection = document.getElementById('services-section');
const aboutSection = document.getElementById('about-section');
const contactSection = document.getElementById('contact-section');



homeButton.addEventListener('click', function(){
    homeSection.scrollIntoView({behavior: "smooth"});
});

servicesButton.addEventListener('click', function(){
    servicesSection.scrollIntoView({behavior: "smooth"});
});

aboutButton.addEventListener('click', function(){
    aboutSection.scrollIntoView({behavior: "smooth"});

})

contactButton.addEventListener('click', function(){
    contactSection.scrollIntoView({behavior: "smooth"});
});

getQuote.addEventListener('click', function(){
    contactSection.scrollIntoView({behavior: "smooth"});
})


const homeButton2 = document.getElementById('home2');
const servicesButton2 = document.getElementById('services2');
const aboutButton2 = document.getElementById('about-us2');
const contactButton2 = document.getElementById('contact-us2');

homeButton2.addEventListener('click', function(){
    hideMenu();
    homeSection.scrollIntoView({behavior: "smooth"});
    
});

servicesButton2.addEventListener('click', function(){
    hideMenu();
    servicesSection.scrollIntoView({behavior: "smooth"});
});

aboutButton2.addEventListener('click', function(){
    hideMenu();
    aboutSection.scrollIntoView({behavior: "smooth"});
})

contactButton2.addEventListener('click', function(){
    hideMenu();
    contactSection.scrollIntoView({behavior: "smooth"});
});


document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(this);
    const submitButton = this.querySelector('button[type="submit"]'); // Select the submit button
    const originalButtonText = submitButton.textContent; // Store original text

    // Show "Sending..." message
    submitButton.textContent = "Sending...";
    submitButton.disabled = true; // Disable the button to prevent multiple submissions

    fetch("https://formsubmit.co/ajax/zahierclaronino50@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Thank you for your message! We'll get back to you soon.");
            event.target.reset(); // Reset the form after submission
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    })
    .catch(error => alert("Error: " + error))
    .finally(() => {
        // Restore original button text and enable it again
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });
});

document.querySelector('#contactForm2').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(this);
    const submitButton = this.querySelector('button[type="submit"]'); // Select the submit button
    const originalButtonText = submitButton.textContent; // Store original text

    // Show "Sending..." message
    submitButton.textContent = "Sending...";
    submitButton.disabled = true; // Disable the button to prevent multiple submissions

    fetch("https://formsubmit.co/ajax/zahierclaronino50@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Thank you for your message! We'll get back to you soon.");
            event.target.reset(); // Reset the form after submission
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    })
    .catch(error => alert("Error: " + error))
    .finally(() => {
        // Restore original button text and enable it again
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.images;
    let loadedCount = 0;
    const preloader = document.getElementById("preloader");

    if (images.length === 0) {
        removePreloader();
    } else {
        for (let i = 0; i < images.length; i++) {
            const img = new Image();
            img.src = images[i].src;
            img.onload = img.onerror = imageLoaded;
        }
    }

    function imageLoaded() {
        loadedCount++;
        if (loadedCount === images.length) {
            removePreloader();
        }
    }

    function removePreloader() {
        preloader.classList.add("hidden");
        document.body.classList.add("loaded"); // Add this to trigger animations
    }
});