const images = [
    "B1.jpg",
    "B2.jpg",
    "B3.jpg",
    "B4.jpg",
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



window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    // Safely remove preloader once everything is loaded
    if (preloader) {
        preloader.classList.add("hidden");
    }

    // Re-enable scroll and show the page content
    document.body.classList.add("loaded");

    // Trigger any animations that were paused
    document.querySelectorAll('.animate-slide').forEach(el => {
        el.style.animationPlayState = "running";
    });
});


document.querySelector("#contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission
    
    const form = this;
    const submitButton = form.querySelector("#submit-btn"); 
    const originalButtonText = submitButton.innerHTML;

    // Disable button & show loading text
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/sptgtransport@gmail.com", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Server Response:", data); // Log response for debugging

        if (data.success) {
            alert("Thank you for your message! We'll get back to you soon.");
            form.reset(); // Reset the form
        } else {
            throw new Error(data.message || "Unknown error occurred");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    })
    .finally(() => {
        // Restore button state after sending
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    });
});


document.querySelector("#contactForm2").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission
    
    const form = this;
    const submitButton = form.querySelector("#submit-btn2"); 
    const originalButtonText = submitButton.innerHTML;

    // Disable button & show loading text
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/sptgtransport@gmail.com", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Server Response:", data); // Log response for debugging

        if (data.success) {
            alert("Thank you for your message! We'll get back to you soon.");
            form.reset(); // Reset the form
        } else {
            throw new Error(data.message || "Unknown error occurred");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    })
    .finally(() => {
        // Restore button state after sending
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    });
});