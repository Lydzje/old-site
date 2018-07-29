"use strict";

// VARIABLES
// ---------
var body = document.body;
var index = document.getElementById('index');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var command = document.getElementById('command');
var goto = document.getElementById('goto');

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
setInterval(blink, 500);

// Decryption effect code
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=+<>,./?¿[{()}]!@#$%^&*~`\|".split('');

// Title
var titleTextElement = document.getElementById("index-title-text");
var titleText = titleTextElement.innerHTML;
var titleTextCopy = titleText;
var titleLen = titleText.length;

var titleObj = {
    element  : titleTextElement,
    text     : titleText,
    textCopy : titleTextCopy,
    len      : titleLen,
    chrsSet  : 0,
    mutTimer : null,
    incTimer : null
}

titleObj.mutTimer = setInterval(
    function() {
	textMutation(titleObj);
    }, 20
);

setTimeout(
    function() {
	titleObj.incTimer = setInterval(
	    function() {
		incrementChrsSet(titleObj)
	    }, 70
	);
    }, 1500
);
// end Title

// About button
var aboutTextElement = document.getElementById("about-text");
var aboutText = aboutTextElement.innerHTML;
var aboutTextCopy = aboutText;
var aboutLen = aboutText.length;

var aboutObj = {
    element  : aboutTextElement,
    text     : aboutText,
    textCopy : aboutTextCopy,
    len      : aboutLen,
    chrsSet  : 0,
    mutTimer : null,
    incTimer : null
}

aboutObj.mutTimer = setInterval(
    function() {
	textMutation(aboutObj);
    }, 20
);

setTimeout(
    function() {
	aboutObj.incTimer = setInterval(
	    function() {
		incrementChrsSet(aboutObj)
	    }, 70
	);
    }, 2000
);
// end About button

// Contact button
var contactTextElement = document.getElementById("contact-text");
var contactText = contactTextElement.innerHTML;
var contactTextCopy = contactText;
var contactLen = contactText.length;

var contactObj = {
    element  : contactTextElement,
    text     : contactText,
    textCopy : contactTextCopy,
    len      : contactLen,
    chrsSet  : 0,
    mutTimer : null,
    incTimer : null
}

contactObj.mutTimer = setInterval(
    function() {
	textMutation(contactObj);
    }, 20
);

setTimeout(
    function() {
	contactObj.incTimer = setInterval(
	    function() {
		incrementChrsSet(contactObj)
	    }, 70
	);
    }, 2500
);
// end Contact button

// end Decryption effect code


// FUNCTIONS
// ---------
function fadeIn() {
    indexTitle.style.opacity = "1";
    indexTitle.style.pointerEvents = "auto";
    nav2.style.opacity = "1";
    nav2.style.pointerEvents = "auto";
    command.style.opacity = "1";
}


function blink(){
    if(goto.style.visibility=='hidden') {
        goto.style.visibility='visible';
    } else {
        goto.style.visibility='hidden';
    }
}


function setCharAt(str, index, chr) {
    if(index > str.length-1){
	return str;
    }

    return str.substr(0, index) + chr + str.substr(index+1);
}


function incrementChrsSet(textObj) {
    var len = textObj.len;

    textObj.chrsSet += 1;
    textObj.textCopy = setCharAt(textObj.textCopy, textObj.chrsSet-1, textObj.text.charAt(textObj.chrsSet-1));

    if(textObj.chrsSet == len) {
	clearInterval(textObj.mutTimer);
	clearInterval(textObj.incTimer);
	textObj.element.innerHTML = textObj.textCopy;
    }
}


function textMutation(textObj) {
    var len = textObj.len;

    for(var i = textObj.chrsSet; i < len; i++) {
	var random = Math.round(Math.random() * (characters.length-1));
	var chr = characters[random];
	textObj.textCopy = setCharAt(textObj.textCopy, i, chr);
	textObj.element.innerHTML = textObj.textCopy;
    }
}


function setGoto(here) {
  if (here != '') {  
    goto.innerHTML = here;
  } else goto.innerHTML = '...'
}


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
