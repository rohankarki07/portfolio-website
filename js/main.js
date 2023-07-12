// ************ SHOW MENU
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//  MENU HIDDEN
// validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//  REMOVE MENU MOBILE
const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav link, we remove the show menu class
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));


//  CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById("header");
  //when the scroll is greater than 80vh, add the class scroll header to the tag header
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);






// *************************** SCROLL SECTIONS ACTIVE LINK
//GET ALL SECTIONS THAT HAVE AN ID DEFINED
const sections = document.querySelectorAll("section[id]");

//add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  //get current scroll position
  let scrollY = window.pageYOffset;
  //now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}






// ****************************** THEME/DISPLAY CUSTOMIZATION
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-colour span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");

//open modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
//close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

//  ------------------FONTS
// makes the red button place where clicked for font
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "12px";
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "14px";
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "18px";
    }
    //change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//  -------------------PRIMARY COLORS

//removes the active class from colours
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    changeActiveColorClass(); //change active class of colour

    if (color.classList.contains("colour-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("colour-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("colour-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("colour-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("colour-5")) {
      primaryHue = 202;
    }
    color.classList.add("active"); //makes the colour selected
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

//  -------------------THEME BACKGROUNDS
//removes the active class from theme
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg colour
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};
Bg1.addEventListener("click", () => {
  //add active class
  Bg1.classList.add("active");
  //remove active class from others
  Bg2.classList.remove("active");
  //remove customized changes from local storage
  window.location.reload();
});
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  //add active class
  Bg2.classList.add("active");
  //remove active class from others
  Bg1.classList.remove("active");
  changeBG();
});
