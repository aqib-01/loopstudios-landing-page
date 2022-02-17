import gsap from "gsap";

export const animateHamBtnClose = () => {
  gsap.to(".ham-btn .bar-2", {
    scaleX: 0,
    transformOrigin: "left",
    duration: 0.4,
  });
  gsap.to(".ham-btn .bar-1", {
    delay: 0.4,
    rotate: 45,
    y: 9,
  });
  gsap.to(".ham-btn .bar-3", {
    delay: 0.4,
    rotate: -45,
    y: -9,
  });
};
export const animateHamBtnOpen = () => {
  gsap.to(".ham-btn .bar-2", {
    delay: 0.3,
    scaleX: 1,
    transformOrigin: "left",
  });
  gsap.to(".ham-btn .bar-1", {
    rotate: 0,
    y: 0,
  });
  gsap.to(".ham-btn .bar-3", {
    rotate: 0,
    y: 0,
  });
};
export const animateMobMenuOpen = () => {
  gsap.to(".mob-menu", {
    height: "100%",
    duration: 0.8,
    ease: "power3",
  });
  gsap.to(".mob-menu .nav-link-li", {
    delay: 0.6,
    stagger: 0.2,
    x: 0,
    duration: 0.3,
    ease: "back",
  });
};
export const animateMobMenuClose = () => {
  gsap.to(".mob-menu", {
    delay: 1,
    height: 0,
  });
  gsap.to(".mob-menu .nav-link-li", {
    stagger: 0.2,
    x: -130,
    duration: 0.3,
  });
};
export const animateHeader = () => {
  gsap.from(".logo-header", {
    x: -300,
    duration: 0.6,
    ease: "expo",
  });
  gsap.from(".ham-btn", {
    x: 200,
    duration: 0.6,
    ease: "expo",
  });

  if (window.innerWidth >= 768) {
    gsap.from(".nav-link-li", {
      delay: 0.6,
      stagger: 0.2,
      opacity: 0,
      duration: 0.5,
      ease: "back",
    });
    gsap.from(".immersive-exp", {
      delay: 1.6,
      duration: .8,
      opacity: 0,
    });
  } else if (window.innerWidth < 768) {
    gsap.from(".immersive-exp", {
      delay: 0.4,
      x: -600,
    });
  }
};
