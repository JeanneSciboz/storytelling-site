import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Fonction pour faire venir les images de gauche au centre avec un opacité.
gsap.registerPlugin(ScrollTrigger);

function appearLeft(element) {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "center 85%",
      end: "center 15%",
      toggleActions: "play none none reverse",
    },
    x: -500,
    duration: 1,
    opacity: 0,
  });
}

//dessou les images qui arrivent de la gauche.
appearLeft(".image-butterfly");
appearLeft(".image-tree");
appearLeft(".image-graveyard");
appearLeft(".images-man-ground");
appearLeft(".image-graveyard-man");
appearLeft(".image-ground-hand");
appearLeft(".images-man-back");
appearLeft(".images-man-ground");

//Fonction pour faire venir les images de la droite au centre avec un opacité.

function appearRight(element) {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "center 85%",
      end: "center 15%",
      toggleActions: "play none none reverse",
    },
    x: 500,
    duration: 1,
    opacity: 0,
  });
}

//dessou les images qui arrivent de la droite.
appearRight(".image-sky");
appearRight(".image-temple");
appearRight(".image-forest");
appearRight(".images-man-ground");
appearRight(".image-backgroud-wind");
appearRight(".image-hands");
appearRight(".image-man");

//Fonction pour ajouter un paralaxe sur les images.

function paralax(element) {
  gsap.to(element, {
    yPercent: 15,
    scrollTrigger: {
      trigger: ".container",
      scrub: 1,
    },
  });
}

paralax(".image-butterfly");
paralax(".image-graveyard");
paralax(".image-temple");
paralax(".image-man");
paralax(".image-hands");
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

//Fonction pour faire apparetre les textes de opacité 0 à 100%
gsap.registerPlugin(ScrollTrigger);

// Sélectionne tous les éléments ayant la classe "texte-animate"
const textes = document.querySelectorAll(".texte-animate");

textes.forEach((texte) => {
  gsap.fromTo(
    texte,
    { opacity: 0, scale: 0.9 }, // Départ invisible
    {
      opacity: 1, // Fin visible
      scale: 1,
      duration: 3, // Durée de l'animation
      scrollTrigger: {
        trigger: texte, // Déclencheur propre à chaque texte
        start: "top 80%", // Commence à 80% de la hauteur de la fenêtre
        end: "top 30%", // Se termine à 30%
        scrub: true, // Synchronise avec le scroll
      },
    }
  );
});
