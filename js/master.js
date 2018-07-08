"use strict";

// VARIABLES
// ---------
var body = document.body;
var index = document.getElementById('index');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
// index objects
var indexTitle = document.getElementById('index-title');
var nav1 = document.getElementById('navigator1');
var nav2 = document.getElementById('navigator2');
// nav2 links
var aboutLink = document.getElementById('about-link');
var contactLink = document.getElementById('contact-link');

var currentSection = "index";
var initialFading = true;

// INITIALIZATION
// --------------
// Google Analytics
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-103828585-1', 'auto');
  ga('send', 'pageview');

// FUNCTIONS
// ---------
function moveTo(section) {
  if (initialFading) {
    initialFading = false;
    indexTitle.style.transition = "all 0.3s";
    indexTitle.style.webkitTransition = "all 0.3s";
    nav2.style.transition = "all 0.3s";
    nav2.style.webkitTransition = "all 0.3s";
    nav2.style.transitionDelay = "0s";
    nav2.style.webkitTransitionDelay = "0s";
  }
  // Closes current section
  if (currentSection == "index") {
    body.style.backgroundColor = "#c95669";
    index.style.height = "4em";
    indexTitle.style.opacity = "0";
    indexTitle.style.pointerEvents = "none";
    nav2.style.opacity = "0";
    nav2.style.pointerEvents = "none";
    nav1.style.opacity = "1";
    nav1.style.pointerEvents = "auto";
  } else if (currentSection == "about") {
    body.style.backgroundColor = "#56c9b6";
    about.style.top = "100%";
    about.style.bottom = "-100%";
    aboutLink.style.fontWeight = "normal";
    aboutLink.style.pointerEvents = "auto";
    about.style.zIndex = "2";
    contact.style.zIndex = "3";
  } else if (currentSection == "contact") {
    body.style.backgroundColor = "#c95669";
    contact.style.left = "100%";
    contact.style.right = "-100%";
    contactLink.style.fontWeight = "normal";
    contactLink.style.pointerEvents = "auto";
    about.style.zIndex = "3";
    contact.style.zIndex = "2";
  }
  // Opens target section
  if (section == "index") {
    currentSection = "index";
    index.style.height = "100%";
    indexTitle.style.opacity = "1";
    indexTitle.style.pointerEvents = "auto";
    nav2.style.opacity = "1";
    nav2.style.pointerEvents = "auto";
    nav1.style.opacity = "0";
    nav1.style.pointerEvents = "none";
    aboutLink.style.pointerEvents = "none";
    contactLink.style.pointerEvents = "none";
  } else if (section == "about") {
    currentSection = "about";
    about.style.top = "0%";
    about.style.bottom = "0%";
    aboutLink.style.fontWeight = "bold";
    aboutLink.style.pointerEvents = "none";
    contactLink.style.pointerEvents = "auto";
  } else if (section == "contact") {
    currentSection = "contact";
    contact.style.left = "0%";
    contact.style.right = "0%";
    contactLink.style.fontWeight = "bold";
    aboutLink.style.pointerEvents = "auto";
    contactLink.style.pointerEvents = "none";
  }
}

function fadeIn() {
  indexTitle.style.opacity = "1";
  indexTitle.style.pointerEvents = "auto";
  nav2.style.opacity = "1";
  nav2.style.pointerEvents = "auto";
}
