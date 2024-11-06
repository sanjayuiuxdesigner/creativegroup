"use strict";

// bouncy header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// menu js
function toggleNav() {
    const sidepanel = document.querySelector(".menu");
    sidepanel.classList.toggle("navmenu");
}

// menu js
const dropdowns = document.querySelectorAll('.dropdown');

function toggleDropdown(e) {
    const svgIcon = e.target.closest('svg');
    if (!svgIcon) return;

    const parentOfTarget = svgIcon.closest('.dropdown'); // Ensure it's the direct parent

    dropdowns.forEach((dropdown) => {
        if (dropdown !== parentOfTarget && !dropdown.contains(parentOfTarget)) {
            dropdown.classList.remove('mobile_dropdown');
        }
    });

    if (parentOfTarget) {
        parentOfTarget.classList.toggle('mobile_dropdown');
    }
}

dropdowns.forEach((dropdown) => {
    dropdown.querySelector('svg').addEventListener("click", toggleDropdown);
});

// counter js 
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.counter-num').forEach(counter => {
        const target = +counter.dataset.count;
        const suffix = counter.dataset.suffix || '';
        let count = 0;

        const increment = setInterval(() => {
            count++;
            counter.textContent = count + suffix;

            if (count >= target) clearInterval(increment);
        }, 50); // Adjust speed here
    });
});

// testimonial
$('.testimonial_slider').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    dots: true,
});

// projects
$('.projects_slider').slick({
    infinite: true,
    slidesToShow: 4,
    spaceBetween: 30,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// back to top
const calcScrollValue = () => {
    const scrollProgress = document.getElementById("btt-btn");
    const progressValue = document.getElementById("progress-value");
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    // Toggle the visibility of the scroll progress button
    if (pos > 100) {
        scrollProgress.style.display = "grid";
        scrollProgress.classList.add("back"); // Add class when scrolled past threshold
    } else {
        scrollProgress.classList.remove("back"); // Remove class when scrolled back up
    }

    // Add event listener for the click event
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    // Update the background gradient based on scroll value
    scrollProgress.style.background = `conic-gradient(var(--light) ${scrollValue}%, var(--black) ${scrollValue}%)`;
};

// Attach event listeners
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// tabs 
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Run only if the .portfolio parent element exists
const portfolio = document.querySelector(".portfolio");
if (portfolio) {
    const firstTab = document.getElementsByClassName("tablinks")[0];
    const firstContent = document.querySelector(".tabcontent");

    if (firstTab && firstContent) {
        firstTab.classList.add("active");
        firstContent.style.display = "block";
    }
}

// faqs
const detailsElements = document.querySelectorAll("details");
const summaryElements = document.querySelectorAll("summary");
summaryElements.forEach((summary, index) => {
    summary.addEventListener("click", () => {
        detailsElements.forEach((details, i) => {
            if (i !== index) {
                details.open = false;
            }
        });
        summaryElements.forEach((s, i) => {
            if (i !== index) {
                s.classList.remove("actives");
            }
        });
        summary.classList.toggle("actives");
    });
});

document.querySelector('.view_all').addEventListener('click', function() {
    document.querySelector('.viewall').classList.toggle('look');
});