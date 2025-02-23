const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

// Toggle Mobile Menu
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-0");
    navMenu.classList.toggle("left-[-100%]");
    hamburger.classList.toggle("ri-close-large-line");
    hamburger.classList.toggle("ri-menu-4-line");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add("left-[-100%]");
        navMenu.classList.remove("left-0");
        hamburger.classList.add("ri-menu-4-line");
        hamburger.classList.remove("ri-close-large-line");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollUpBtn = document.getElementById('scroll-up');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.remove('-bottom-1/2');
            scrollUpBtn.classList.add('bottom-4');
        } else {
            scrollUpBtn.classList.add('-bottom-1/2');
            scrollUpBtn.classList.remove('bottom-4');
        }
    });

    scrollUpBtn.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// swiper

const swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});