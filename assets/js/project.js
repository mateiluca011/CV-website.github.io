AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Pizzetto Restaurant WebSite",
    cardImage: "assets/images/designs/Pizzetto.png",
    description: "Nhaac Restaurant WebSite.",
    Previewlink: "https://mateiluca011.github.io/MovieWebsite/",
    Githublink: "https://mateiluca011.github.io/MovieWebsite/",
  },
  {
    title: "MovieFlix Website",
    cardImage: "assets/images/designs/Movie.png",
    description: "Registration Form built in JavaScript, HTML and CSS",
    Previewlink: "https://mateiluca011.github.io/MovieWebsite/",
    Githublink: "https://mateiluca011.github.io/MovieWebsite/",
  },
  {
    title: "Solar System Website",
    cardImage: "assets/images/designs/Sistem.png",
    description: "Landing Page Nike built using JS, HTML and CSS",
    Previewlink: "https://mateiluca011.github.io/SolarSystem/",  
    Githublink: "https://mateiluca011.github.io/SolarSystem/",
  },
  {
    title: "Tutorial Rest API (In Developing)",
    cardImage: "assets/images/designs/rest_tutorial.png",
    description: "Tutorial Rest API Website",
    Previewlink: "",
    Githublink: "https://github.com/DaveSimoes/LightandDarktheme",
  },
  {
    title: "BMI Calculator",
    cardImage: "assets/images/designs/bmicalculator.png",
    description: "BMI Calculator app. Developed built using Flutter",
    Previewlink: "",
    Githublink: "https://github.com/DaveSimoes/MyFirstAppMobile",
  },
  {
    title: "Responsive Resume Website",
    cardImage: "assets/images/designs/Resume_app.png",
    description: "Poker game built using typescript.",
    Previewlink: "https://davidsimoes-resume.netlify.app/",
    Githublink: "",
  },
  // … restul proiectelor …
];

// rendering project cards
const showCards = () => {
  let output = "";
  for (const { title, cardImage, Previewlink, Githublink } of projects) {
    output += `
      <div class="column skill-card card"
           style="margin: 15px"
           data-aos="zoom-in-up"
           data-aos-easing="linear"
           data-aos-delay="300"
           data-aos-duration="600">
        <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
          <div class="header"></div>
          <div class="data">
            <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
              </div>
              <ul class="menu-content"><br>
                <li>
                  <a href="${Previewlink}" class="social-icon" target="_blank">
                    <!-- icon monitor SVG -->
                  </a>
                </li>
                <li>
                  <a href="${Githublink}" class="social-icon" target="_blank">
                    <!-- icon github SVG -->
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;
  }
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", () => {
  showCards();

  // 1) săgeată de “pointer” peste fiecare card
  document.querySelectorAll(".skill-card").forEach((card) => {
    card.style.cursor = "pointer";
  });

  // 2) click pe tot container-ul
  document.querySelectorAll(".skill-card").forEach((card, i) => {
    card.addEventListener("click", () => {
      const url = projects[i].Previewlink; // => aici alegi Previewlink sau Githublink
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
