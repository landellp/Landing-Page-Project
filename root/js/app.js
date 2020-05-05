/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/* Builds out the 4th Section, a clone of Section 3, and changes text and attributes > 4 section requirement*/
function addSection4() {
  var section3 = document.getElementById("section3");
  var section4 = section3.cloneNode(true);
  document.getElementsByTagName("main")[0].appendChild(section4);
  document.getElementsByTagName("section")[3].setAttribute("id", "section4");
  document.getElementsByTagName("section")[3].setAttribute("data-nav", "section 4");
  document.getElementsByTagName("h2")[3].textContent = "Section 4";
}

addSection4();

/**
 * Define Global Variables
*/

const navBar = document.querySelector('#navbar__list');
const sectionList = document.querySelectorAll('section');
const sectionCount = document.querySelectorAll('section').length;
const navBarLinks = document.querySelectorAll('a');
const anchorLinks = document.getElementsByClassName('anchor__link');
const sections = 4;
let prevScrollpos = window.pageYOffset;


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function activeWindow() {
    var lastSection = sectionList[3];
    var boundingValue = 100000;
    for (item of sectionList) {
        var bounding = item.getBoundingClientRect();
        if (bounding.top > -400 & bounding.top < boundingValue) {
            var boundingValue = bounding.top;
            var lastSection = item;
        };
    };
    return lastSection;
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
/* Builds the Navigation Bar with attribute and text */
function navAdd() {
  for (let i = 1; i <= sections; i++) {
      var buildList = document.createElement('li');
      var listText = document.createTextNode(`Section ${i}`);
      buildList.className = 'menu__link';
      buildList.setAttribute('data-nav', `section${i}`);
      navBar.appendChild(buildList);
      buildList.appendChild(listText);
  };
};

// Add class 'active' to section when near top of viewport
function setClassActive () {
    window.addEventListener('scroll', function(e) {
        var inView = activeWindow();
        inView.classList.add('active');
        for (let item of sectionList) {
            if (item.id != inView.id & item.classList.contains('active')) {
                item.classList.remove('active');
            }
        }
        var viewing = document.querySelector('[data-nav="' + inView.id + '"]');
        var menuLink = document.querySelectorAll('.menu__link');

        viewing.classList.add('active__link');

        for (let item of menuLink) {
            console.log(item);
            if (item.dataset.nav != viewing.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};

// Scroll to anchor ID using scrollTO event

function slowScroll() {
    navBar.addEventListener('click', function(e) {
        var sectionClick = document.getElementById(e.target.dataset.nav);
        sectionClick.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
};



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu on initial scroll
window.addEventListener('scroll', navAdd, {once: true});

// Scroll to section on link click
slowScroll();

// Set sections as active
setClassActive();
