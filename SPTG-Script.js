const images = [
    "B1.jpg",
    "B2.jpg",
    "B3.jpg",
    "B4.jpg",
    "home-background1.jpg"
];

let currentIndex = 0;
const homeSection = document.querySelector(".home");
const overlay = document.querySelector(".overlay");
// Previously we waited for all images to load which delayed rendering.
// We'll only wait for the primary hero image (B1.jpg) and then lazily preload the rest.
let _preloadFinished = false;

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

// Change image every 6 seconds
// Start rotating backgrounds, but only after initial paint so it doesn't delay first render.
setTimeout(() => setInterval(changeImage, 5000), 1000);


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



// Faster preloader: only wait for the primary hero image and a short timeout.
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    // Ensure the primary hero image is ready (B1.jpg). We preloaded it via <link rel="preload"> in HTML.
    const hero = new Image();
    let heroLoaded = false;
    hero.src = images[0];
    hero.onload = hero.onerror = () => { heroLoaded = true; maybeHide(); };

    // Hide preloader when either hero loaded or 1.5s passed (whichever first)
    let fallbackTimer = setTimeout(() => { maybeHide(); }, 1500);

    function maybeHide(){
        if (_preloadFinished) return;
        if (heroLoaded || Date.now() - startTime > 1400) {
            _preloadFinished = true;
            if (preloader) preloader.classList.add('hidden');
            document.body.classList.add('loaded');
            // Begin background lazy preloading of the rest when browser is idle
            scheduleBackgroundPreload();
            clearTimeout(fallbackTimer);
        }
    }

    const startTime = Date.now();
});

function scheduleBackgroundPreload(){
    const toPreload = images.slice(1); // skip primary already inlined
    const doPreload = () => {
        toPreload.forEach(src => { const img = new Image(); img.src = src; });
    };
    if ('requestIdleCallback' in window) requestIdleCallback(doPreload, {timeout: 3000}); else setTimeout(doPreload, 2000);
}



document.querySelector("#contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission
    
    const form = this;
    const submitButton = form.querySelector("#submit-btn"); 
    const originalButtonText = submitButton.innerHTML;

    // Disable button & show loading text
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    // const formData = new FormData(form);

    // fetch("https://formsubmit.co/ajax/zahierclaronino50@gmail.com", {
    //     method: "POST",
    //     headers: { "Accept": "application/json" },
    //     body: formData
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP Error ${response.status}`);
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log("Server Response:", data); // Log response for debugging

    //     if (data.success) {
    //         alert("Thank you for your message! We'll get back to you soon.");
    //         form.reset(); // Reset the form
    //     } else {
    //         throw new Error(data.message || "Unknown error occurred");
    //     }
    // })
    // .catch(error => {
    //     console.error("Error:", error);
    //     alert("Something went wrong. Please try again later.");
    // })
    // .finally(() => {
    //     // Restore button state after sending
    //     submitButton.disabled = false;
    //     submitButton.innerHTML = originalButtonText;
    // });
});

// Safety fallback: if the preloader is still visible after 8s, hide it.
setTimeout(() => {
    try {
        const preloader = document.getElementById('preloader');
        if (preloader && !preloader.classList.contains('hidden')) {
            console.warn('Preloader fallback: forced hide after 8s');
            preloader.classList.add('hidden');
            document.body.classList.add('loaded');
            scheduleBackgroundPreload();
        }
    } catch (e) {
        console.error('Preloader fallback error:', e);
    }
}, 8000);


// Contact form 2 handler removed — forms submit via normal HTML POST now.

// Add AJAX-enhanced submit handlers for both forms so the button shows
// "Sending..." and the user gets immediate success/failure feedback.
function attachFormHandler(formSelector, submitButtonSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitButton = form.querySelector(submitButtonSelector) || form.querySelector('button[type="submit"]');
        const originalText = submitButton ? submitButton.innerHTML : 'Submit';
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';
        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: (form.method || 'POST').toUpperCase(),
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (response.ok) {
                // Try to parse JSON for more detailed messages, but don't fail if not JSON
                let body = null;
                try { body = await response.json(); } catch (err) { /* ignore */ }

                // Success feedback
                alert('Thank you — your message was sent successfully.');
                form.reset();
            } else {
                // Non-2xx response
                let text = '';
                try { text = await response.text(); } catch (e) { /* ignore */ }
                console.error('Form submit error', response.status, text);
                alert('Could not send your message. Please try again later.');
            }
        } catch (err) {
            console.error('Fetch error submitting form:', err);
            const proceed = confirm('Sending failed (network/CORS). Submit the form the normal way instead?');
            if (proceed) {
                // Submit normally (will navigate away). Use native submit to bypass this handler.
                form.removeEventListener('submit', arguments.callee);
                form.submit();
                return; // native submit will navigate
            } else {
                alert('Your message was not sent. Please try again later or use our contact phone/email.');
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }
        }
    });
}

// Attach handlers to both forms
attachFormHandler('#contactForm', '#submit-btn');
attachFormHandler('#contactForm2', '#submit-btn2');

