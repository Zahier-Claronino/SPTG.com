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
// Track image preload state at module scope so the fallback can inspect it
let _preloadLoadedCount = 0;
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
setInterval(changeImage, 5000);


const menu = document.getElementById('menu');

menu.style.opacity = '0';
// ensure the hidden menu does not block pointer events
menu.style.pointerEvents = 'none';

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
    menu.style.pointerEvents = 'auto';
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
    menu.style.pointerEvents = 'none';
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

// Reviews nav buttons
const reviewsButton = document.getElementById('reviews');
const reviewsButton2 = document.getElementById('reviews2');
const reviewsSection = document.getElementById('reviews-section');
if(reviewsButton) reviewsButton.addEventListener('click', function(){ if(reviewsSection) reviewsSection.scrollIntoView({behavior: 'smooth'}); });


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
// wire off-canvas reviews button
if(reviewsButton2) reviewsButton2.addEventListener('click', function(){ hideMenu(); if(reviewsSection) reviewsSection.scrollIntoView({behavior: 'smooth'}); });



window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    // use module-scoped counters so other code (fallback) can see progress
    _preloadLoadedCount = 0;

    const preloadImages = images.map((src) => {
        const img = new Image();
        img.src = src;

        // Handle cached images
        if (img.complete) {
            _preloadLoadedCount++;
        } else {
            img.onload = img.onerror = () => {
                _preloadLoadedCount++;
                if (_preloadLoadedCount === images.length) allImagesLoaded();
            };
        }

        return img;
    });

    // If everything was already cached
    if (_preloadLoadedCount === images.length) {
        allImagesLoaded();
    }

    function allImagesLoaded() {
        // Hide preloader if you have one
        _preloadFinished = true;
        if (preloader) preloader.classList.add("hidden");

        // Reveal home section after preloading
        document.body.classList.add("loaded");
    }
});



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

// Safety fallback: if the preloader is still visible after 15s, hide it.
// We inspect the preload counters so we avoid hiding too early when images
// are still actively loading; this reduces the risk of the preloader
// disappearing before critical assets finish.
setTimeout(() => {
    try {
        const preloader = document.getElementById('preloader');
        if (preloader && !preloader.classList.contains('hidden')) {
            console.warn(`Preloader fallback: forced hide after 15s — loaded ${_preloadLoadedCount}/${images.length}`);
            preloader.classList.add('hidden');
            document.body.classList.add('loaded');
        }
    } catch (e) {
        console.error('Preloader fallback error:', e);
    }
}, 15000);


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

/* -------------------- Reviews module (localStorage) -------------------- */
(function(){
    const REVIEWS_KEY = 'sptg_reviews_v1';
    function _getVisitorId(){
        try{
            let id = localStorage.getItem('sptg_visitor_id');
            if(!id){ id = 'v_'+Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4); localStorage.setItem('sptg_visitor_id', id); }
            return id;
        }catch(e){ return null; }
    }
    function _isAdmin(){ return sessionStorage.getItem('sptg_is_admin') === '1'; }
    function _requireAdminSignIn(){
        const stored = localStorage.getItem('sptg_admin_pass');
        if(!stored){ const set = prompt('Create admin passphrase (stored locally in browser)'); if(!set) return false; localStorage.setItem('sptg_admin_pass', set); sessionStorage.setItem('sptg_is_admin','1'); alert('Admin passphrase saved; admin enabled for this session'); return true; }
        const attempt = prompt('Enter admin passphrase'); if(!attempt) return false; if(attempt === stored){ sessionStorage.setItem('sptg_is_admin','1'); alert('Admin enabled'); return true; } alert('Incorrect passphrase'); return false;
    }

    function loadReviews(){ try{ const raw = localStorage.getItem(REVIEWS_KEY); return raw?JSON.parse(raw):[] }catch(e){ return [] } }
    function saveReviews(list){ try{ localStorage.setItem(REVIEWS_KEY, JSON.stringify(list)); }catch(e){ console.error(e); } }

    function getAvatarElement(name){
        const initials = (name||'').split(' ').filter(Boolean).slice(0,2).map(s=>s[0].toUpperCase()).join('') || '?';
        let hash = 0; for(let i=0;i<name.length;i++) hash = name.charCodeAt(i) + ((hash<<5)-hash);
        const colors = ['#ef4444','#f97316','#f59e0b','#facc15','#10b981','#06b6d4','#3b82f6','#8b5cf6'];
        const color = colors[Math.abs(hash) % colors.length];
        const el = document.createElement('div'); el.className = 'review-avatar'; el.style.background = color; el.innerText = initials;
        return el;
    }

    function renderReviews(){
        const container = document.getElementById('reviews-container'); if(!container) return;
        const reviews = loadReviews().slice().reverse();
        container.innerHTML = '';
        if(reviews.length === 0){ container.innerHTML = '<div class="reviews-empty">No reviews yet — be the first to leave feedback!</div>'; return; }
        const visitorId = _getVisitorId(); const admin = _isAdmin();
        reviews.forEach(r => {
            const card = document.createElement('div'); card.className = 'review-card';
            const header = document.createElement('div'); header.className = 'review-meta';
            const left = document.createElement('div'); left.className = 'left';
            left.appendChild(getAvatarElement(r.name||'Anonymous'));
            const nameWrap = document.createElement('div'); nameWrap.innerHTML = '<div class="review-name">'+escapeHtml(r.name||'Anonymous')+'</div><div class="review-timestamp">'+(new Date(r.ts||0).toLocaleString())+'</div>';
            left.appendChild(nameWrap);
            const right = document.createElement('div'); right.innerHTML = '<div class="card-stars">'+('★'.repeat(r.rating||5)) + ('☆'.repeat(5-(r.rating||5))) +'</div>';
            header.appendChild(left); header.appendChild(right);
            card.appendChild(header);
            const text = document.createElement('div'); text.className = 'review-text'; text.innerText = r.message||''; card.appendChild(text);
            const isOwner = r.ownerId && visitorId && r.ownerId === visitorId;
            if(isOwner || admin){
                const del = document.createElement('button'); del.className = 'review-delete'; del.title = 'Delete review'; del.innerText = '🗑';
                del.addEventListener('click', function(ev){ ev.stopPropagation(); if(!confirm('Delete this review?')) return; deleteReviewByTs(r.ts); });
                card.appendChild(del);
            }
            container.appendChild(card);
        });
    }

    function deleteReviewByTs(ts){ const list = loadReviews(); const idx = list.findIndex(r => String(r.ts) === String(ts)); if(idx === -1){ alert('Review not found'); return; } list.splice(idx,1); saveReviews(list); renderReviews(); }

    // Escape helper
    function escapeHtml(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    // Modal controls
    const reviewModal = document.getElementById('review-modal'); const reviewBackdrop = document.getElementById('review-backdrop'); const reviewClose = document.getElementById('review-modal-close'); const writeBtn = document.getElementById('write-review-btn'); const mobileReviewBtn = document.getElementById('mobile-review-btn'); const reviewCancel = document.getElementById('review-cancel');
    function openReviewModal(){ if(!reviewModal) return; reviewModal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; const first = document.getElementById('reviewerName'); if(first) first.focus(); }
    function closeReviewModal(){ if(!reviewModal) return; reviewModal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
    if(writeBtn) writeBtn.addEventListener('click', openReviewModal);
    if(mobileReviewBtn) mobileReviewBtn.addEventListener('click', openReviewModal);
    if(reviewClose) reviewClose.addEventListener('click', closeReviewModal);
    if(reviewBackdrop) reviewBackdrop.addEventListener('click', closeReviewModal);
    if(reviewCancel) reviewCancel.addEventListener('click', closeReviewModal);

    // Handle review submission
    const reviewForm = document.getElementById('reviewForm');
    if(reviewForm){
        reviewForm.addEventListener('submit', function(e){
            e.preventDefault();
            const name = (this.querySelector('#reviewerName')||{}).value || 'Anonymous';
            const rating = parseInt((this.querySelector('#reviewRating')||{}).value || '5',10);
            const message = (this.querySelector('#reviewMessage')||{}).value || '';
            const ts = Date.now();
            const ownerId = _getVisitorId();
            const list = loadReviews();
            list.push({ name, rating, message, ts: ts, ownerId: ownerId });
            saveReviews(list);
            renderReviews();
            alert('Thanks — your review was posted!');
            this.reset();
            closeReviewModal();
        });
    }

    // Modal star interaction: build star buttons that sync with hidden select
    function initModalStars(){
        const starContainer = document.getElementById('modal-stars');
        const select = document.getElementById('reviewRating');
        if(!starContainer || !select) return;
        starContainer.innerHTML = '';
        for(let i=1;i<=5;i++){
            const s = document.createElement('span'); s.className = 'modal-star'; s.innerText = '★'; s.dataset.value = String(6 - i);
            s.addEventListener('click', function(){
                const idx = Array.from(starContainer.children).indexOf(this);
                const rating = 5 - idx;
                select.value = String(rating);
                updateStarsUI(starContainer, rating);
            });
            starContainer.appendChild(s);
        }
        updateStarsUI(starContainer, parseInt(select.value||'5',10));
    }
    function updateStarsUI(container, rating){
        const stars = Array.from(container.children);
        stars.forEach((s, idx)=>{
            const starRating = 5 - idx;
            if(starRating <= rating) s.classList.add('active'); else s.classList.remove('active');
        });
    }

    // initialize modal stars on DOM ready and before opening
    document.addEventListener('DOMContentLoaded', initModalStars);
    const originalOpen = openReviewModal;
    function openReviewModalWrapped(){ initModalStars(); originalOpen(); }
    if(writeBtn){ writeBtn.removeEventListener('click', openReviewModal); writeBtn.addEventListener('click', openReviewModalWrapped); }
    if(mobileReviewBtn){ mobileReviewBtn.removeEventListener('click', openReviewModal); mobileReviewBtn.addEventListener('click', openReviewModalWrapped); }

    // Admin button
    const reviewsAdminBtn = document.getElementById('reviews-admin-btn'); if(reviewsAdminBtn){ reviewsAdminBtn.addEventListener('click', function(){ if(_isAdmin()){ sessionStorage.removeItem('sptg_is_admin'); alert('Admin disabled'); renderReviews(); return; } const ok = _requireAdminSignIn(); if(ok) renderReviews(); }); }

    // initial render on DOM ready
    if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', renderReviews); } else { renderReviews(); }

})();

