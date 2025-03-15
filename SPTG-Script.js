const images = [
    "https://i.imgur.com/UTUuesG.jpg",
    "https://imgur.com/0gkRTj8.jpg",
    "https://i.imgur.com/2aFi1LZ.jpg",
    "https://i.imgur.com/SjOtOfB.jpg"
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