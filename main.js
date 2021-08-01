"use strict";

const logoName = document.querySelector(".nav__name");
const aboutLink = document.querySelector(".nav__link--about");
const servicesLink = document.querySelector(".nav__link--services");
const opinionsLink = document.querySelector(".nav__link--opinions");
const contactLink = document.querySelector(".nav__link--contact");
const visitLink = document.querySelector(".nav__link--visit");
const btnMore = document.querySelector(".header__btnMore");
const header = document.querySelector(".header");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const opinions = document.querySelector(".opinions");
const contact = document.querySelector(".footer");

//Scrolls into view

logoName.addEventListener("click", () =>
  header.scrollIntoView({ behavior: "smooth" })
);

const scrollToAbout = () => about.scrollIntoView({ behavior: "smooth" });

aboutLink.addEventListener("click", scrollToAbout);
btnMore.addEventListener("click", scrollToAbout);

servicesLink.addEventListener("click", () =>
  services.scrollIntoView({ behavior: "smooth" })
);

opinionsLink.addEventListener("click", () =>
  opinions.scrollIntoView({ behavior: "smooth" })
);

contactLink.addEventListener("click", () =>
  contact.scrollIntoView({ behavior: "smooth" })
);
