// NAV TOGGLE
const navList = document.querySelector(".nav-list");
const navToggle = document.querySelector(".nav-toggle");
const logo = document.querySelector(".logo");
navStatus = false;
navToggle.addEventListener("click", () => {
  if (navStatus == false) {
    navToggle.style.transform = "rotate(0deg)";
    navList.style.opacity = "1";
    logo.style.transform = "translate(0px, 0px)";
    logo.style.fontSize = "32px";
    console.log("false");
    navStatus = true;
  } else {
    console.log("true");
    navToggle.style.transform = "rotate(180deg)";
    navList.style.opacity = "0";
    logo.style.transform = "translateX(138px)";
    logo.style.fontSize = "42px";
    navStatus = false;
  }
});

// NAV BACKGROUND
 const divContainer = document.querySelector(".container");
 const navHeader = document.querySelector(".header");
//  divContainer.addEventListener("scroll", navHeaderBg);

//  function navHeaderBg() {

//     navHeader.style.backgroundColor = "rgb(64,112,244)";
//     logo.style.color = "#eeee";
    

//  }