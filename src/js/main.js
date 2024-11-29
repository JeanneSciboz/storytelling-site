import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function appearLeft(element) {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "center 85%",
      end: "center 15%",
    },
    x: -500,
    duration: 1,
    opacity: 0,
  });
}

appearLeft(".image-butterfly");
appearLeft(".image-tree");
appearLeft(".image-graveyard");
appearLeft(".images-man-ground");
appearLeft(".image-graveyard-man");
appearLeft("image-ground-hand");

// répéter pour toutes les images

function appearRight(element) {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "center 85%",
      end: "center 15%",
    },
    x: 500,
    duration: 1,
    opacity: 0,
  });
}

appearRight(".image-sky");
appearRight(".image-temple");
appearRight(".image-forest");
appearRight(".images-man-ground");
appearRight(".image-backgroud-wind");
appearRight(".image-hand");

function paralax(element) {
  gsap.to(element, {
    yPercent: 60,
    scrollTrigger: {
      trigger: ".container",
      scrub: 1,
    },
  });
}

paralax(".image-butterfly");
paralax(".image-graveyard");
// répéter pour toutes les images

// gsap.to(".scroll-wrapper", {
//   scrollTrigger: {
//     trigger: ".scroll-mask",
//     pin: true,
//     anticipatePin: 1,
//     scrub: true,
//     // end: () => `+=${scrollHorizontalWidth - windowWidth}`,
//     end: () => `+=${scrollHorizontalWidth - windowWidth}`,
//   },

//   //   x: windowWidth - "6542px",
//   //   x: "-700%",
//   x: "-6542px",
//   ease: "none",
// });

// const windowWidth = window.screen.width;
// const scrollHorizontalWidth =
//   document.querySelector(".scroll-horizontal").offsetWidth;

const scrollMask = document.querySelector(".scroll-mask");
const scrollWrapper = document.querySelector(".scroll-wrapper");

// Ajoute un événement de défilement
scrollMask.addEventListener("wheel", (e) => {
  e.preventDefault(); // Empêche le comportement par défaut (scroll vertical)

  // Calcule le défilement horizontal
  const scrollAmount = e.deltaY; // Utilise le défilement vertical pour le transformer en horizontal
  scrollMask.scrollLeft += scrollAmount; // Déplace horizontalement
});
