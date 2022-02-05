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
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
// Scroll to section on link click
// Set sections as active

//test linked files
//document.write('بسم الله الرحمن الرحيم');

//DOMContentLoad
document.addEventListener("DOMContentLoaded", function () {
  //Bulid NavBar start
  //storing sections in variable
  const sections = document.querySelectorAll("section");
  //create Ul
  const unorderdLi = document.querySelector("ul");
  //create fragment
  const fragment = document.createDocumentFragment();

  //looping over sections
  for (section of sections) {
    console.log(section.id, section.dataset.nav);
    const navList = document.createElement("li");
    const anchorTag = document.createElement("a");
    anchorTag.href = `#${section.id}`;
    anchorTag.textContent = section.dataset.nav;
    anchorTag.classList.add("menu__link");

    //smooth scrolling
    anchorTag.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById(e.currentTarget.hash.replace("#", ""))
        .scrollIntoView({ behavior: "smooth" });
    });
    //attach li to anchor
    navList.appendChild(anchorTag);
    //attach li to fragment
    fragment.appendChild(navList);
  }

  //attach Ul to fragment
  unorderdLi.appendChild(fragment);
  //Bulid NavBar end

  //adding Active class & highlight effect on navBar start
  function viewdSection() {
    sections.forEach((section) => {
      const secTop = section.getBoundingClientRect().top;
      if (secTop >= 0 && secTop <= 191) {
        section.classList.add("your-active-class");
        const anchorTag = document.querySelector(
          "[href='#" + section.id + "']"
        );
        anchorTag.classList.add("highlight");
      } else {
        section.classList.remove("your-active-class");
        const anchorTag = document.querySelector(
          "[href='#" + section.id + "']"
        );
        anchorTag.classList.remove("highlight");
      }
    });
  }
  window.addEventListener("scroll", viewdSection);
  //adding Active class & highlight effect on navBar end
});
