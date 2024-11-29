import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Fonction pour faire venir les images de gauche au centre avec un opacité de 0 à 100%.
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

//Fonction pour faire venir les images de la droite au centre avec un opacité de 0 à 100%.
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

//les images qui arrivent de la droite.
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

// Les images qui on besoin d'un paralax
paralax(".image-butterfly");
paralax(".image-graveyard");
paralax(".image-temple");
paralax(".image-man");
paralax(".image-hands");

// js pour faire fonctionner le scroll horizontale
let scrollingImage = document.querySelector(".scroll-horizontal"); // Sélectionnez l'élément
let hauteurElement = window.innerHeight; // Largeur de l'élément en pixels
let largeurPage = window.innerWidth; // Largeur actuelle de la fenêtre
let longeurScrolling = (7.80859375 * hauteurElement - largeurPage) * -1;
// calcule : ratio de l'image * la hauter de la page (également celle de l'image
// car elle fait 100vh de haut) -la largeur de la page carr c'est la partie
// affichée de base. Tout ça * -1 pour un resultat negatif

gsap.to(scrollingImage, {
  scrollTrigger: {
    trigger: ".scroll-mask",
    pin: true,
    anticipatePin: 1,
    scrub: true,
    end: "+=3000",
    markers: false,
  },
  x: longeurScrolling,
  ease: "none",
});

//Fonction pour faire apparetre les textes de opacité 0 à 100% et un léger scale.
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
