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
    duration: 2,
    opacity: 0,
  });
}

appearLeft(".image-butterfly");
// répéter pour toutes les images

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
// répéter pour toutes les images

gsap.to(".scroll-wrapper", {
  scrollTrigger: {
    trigger: ".scroll-mask",
    pin: true,
    anticipatePin: 1,
    scrub: true,
    // end: () => `+=${scrollHorizontalWidth - windowWidth}`,
    end: "+=7000",
  },
  //   x: windowWidth - scrollHorizontalWidth,
  x: "-700%",
  ease: "none",
});

const windowWidth = window.screen.width;
const scrollHorizontalWidth =
  document.querySelector(".slider-element").offsetWidth;
