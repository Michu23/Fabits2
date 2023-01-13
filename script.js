gsap.registerPlugin(ScrollTrigger);

const tl2 = gsap.timeline();

tl2
  .from(".s11", {
    x: 100,
    opacity: 0,
  })
  .to(".s11", {
    x: 100,
    opacity: 0,
  })
  .from(".s22", {
    x: -100,
    opacity: 0,
  })
  .to(".s22", {
    x: 0,
    opacity: 1,
  })
  .to(".s22", {
    x: -100,
    opacity: 0,
  })
  .from(".s33", {
    x: 100,
    opacity: 0,
  })
  .to(".s33", {
    x: -100,
    opacity: 0,
  });

ScrollTrigger.create({
  animation: tl2,
  trigger: ".second__slide__mob",
  start: "top top",
  end: "+=2500",
  scrub: 1,
  pin: true,
  pinSpacing: true,
  // markers: true,
  anticipatePin: 1,
});

const tl = gsap.timeline();

tl.to(".gg3", {
  x: 100,
  opacity: 0,
})
  .from(".gg2", {
    x: -100,
    opacity: 0,
  })
  .to(".gg2", {
    x: 0,
    opacity: 1,
  })
  .to(".gg2", {
    x: -100,
    opacity: 0,
  })
  .from(".gg1", {
    x: 100,
    opacity: 0,
  })
  .to(".gg1", {
    x: 0,
    opacity: 1,
  });

ScrollTrigger.create({
  animation: tl,
  trigger: ".thegiftboxes__mob",
  start: "top top",
  end: "+=2500",
  scrub: 1,
  pin: true,
  pinSpacing: true,
  //   markers: true,
  anticipatePin: 1,
});

gsap.from(".g1", {
  scrollTrigger: {
    trigger: ".gift__section",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },

  opacity: 0,
  x: -300,
});

gsap.from(".g3", {
  scrollTrigger: {
    trigger: ".gift__section",
    // markers: true,
    scrub: 1,

    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: 300,
});

gsap.from(".handimg", {
  scrollTrigger: {
    trigger: ".hand__section__dd",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: 300,
  scale: 0.5,
});

gsap.from(".handp", {
  scrollTrigger: {
    trigger: ".hand__section__dd",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  y: 50,
  scale: 0.7,
});

gsap.from(".handh", {
  scrollTrigger: {
    trigger: ".hand__section__dd",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  y: -50,
  // scale : 0,
});

gsap.from(".handimgg", {
  scrollTrigger: {
    trigger: ".hand__section__mob",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: 300,
  scale: 0.5,
});

gsap.from(".handpp", {
  scrollTrigger: {
    trigger: ".hand__section__mob",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  y: 50,
  scale: 0.7,
});

gsap.from(".handhh", {
  scrollTrigger: {
    trigger: ".hand__section__mob",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  y: -50,
  // scale : 0,
});

gsap.from(".handh", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  y: -50,
  // scale : 0,
});

gsap.from(".a1", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: -100,
  // scale : 0,
});

gsap.from(".a2", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  y: -100,
  // scale : 0,
});

gsap.from(".a3", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: 100,
  // scale : 0,
});

gsap.from(".a4", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: -100,
  // scale : 0,
});

gsap.from(".a5", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  y: 100,
  // scale : 0,
});

gsap.from(".s1", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    scrub: 3,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: -100,
  duration: 3,
});
gsap.from(".s2", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    scrub: 3,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: -100,
  duration: 3,
});
gsap.from(".s3", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    scrub: 3,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: -100,
  duration: 3,
});

gsap.from(".a6", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    // markers: true,
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  x: 100,
  // scale : 0,
});

const hamburger = document.querySelector(".open");
const navs = document.querySelector(".navs");
const header = document.querySelector(".headertag");
const close = document.querySelector(".close");
const pro = document.querySelector(".product__nav");
const nav__dropdown = document.querySelector(".product__nav__dropdown");

const product__nav = document.querySelector(".product__nav");

hamburger.addEventListener("click", () => {
  navs.classList.toggle("d-none");
  // header.classList.toggle("bgg");
  close.classList.toggle("d-none");
  hamburger.classList.toggle("d-none");
});

close.addEventListener("click", () => {
  navs.classList.toggle("d-none");
  // header.classList.toggle("bgg");
  hamburger.classList.toggle("d-none");
  close.classList.toggle("d-none");
});

product__nav.addEventListener("click", () => {
  nav__dropdown__list.classList.toggle("d-none");
});

pro.addEventListener("click", () => {
  nav__dropdown.classList.toggle("d-none");
});

const scrollProgress = document.getElementById("scroll-progress");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});

const scrollProgresss = document.getElementById("scroll-progresss");
const heightt =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgresss.style.width = `${(scrollTop / heightt) * 100}%`;
});

// tl2.from(".f__slide", {
//     x: 400,
//     opacity: 0,
// })
// .to(".f__slide", {
//     x: 0,
// })
// .to(".f__slide", {

//     x: -400,
//     opacity: 0,
// })

// tl3.from(".secondcontent", {
//     x: 400,
//     opacity: 0,
// })
// .to(".secondcontent", {
//     x: 0,
// })
// .to(".secondcontent", {
//     x: -400,
//     opacity: 0,
// })

// tl4.from(".s__slide", {
//     x: 400,
//     opacity: 0,
// })
// .to(".s__slide", {
//     x: 0,
// })
// .to(".s__slide", {
//     x: -400,
//     opacity: 0,
// })

// tl5.from(".thirdcontent", {
//     x: 400,
//     opacity: 0,
// })
// .to(".thirdcontent", {
//     x: 0,
// })
// .to(".thirdcontent", {
//     x: -400,
//     opacity: 0,
// })

// .from(".secondcontent", {
//     x: 800,
//     opacity: 0,
// })
// to(".secondcontent", {
//     x: 0,
// })
// .to(".secondcontent", {
//     x: -800,
//     opacity: 0,

// })
// .from(".thirdcontent", {
//     x: 400,
//     opacity: 0,

// })
// to(".thirdcontent", {
//     x: 0,
// })
// .to(".thirdcontent", {
//     x: -550,
//     opacity: 0,

// });

// ScrollTrigger.create({
//     animation: tl,
//     trigger: ".first",
//     start: "top top",
//     end: "+=2500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl2,
//     trigger: ".first",
//     start: "top top",
//     end: "+=2500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl3,
//     trigger: ".first",
//     start: "+=2500 top",
//     end: "+=5000",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl4,
//     trigger: ".first",
//     start: "+=2500 top",
//     end: "+=5000",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl5,
//     trigger: ".first",
//     start: "+=5000 top",
//     end: "+=7500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl6,
//     trigger: ".first",
//     start: "+=5000 top",
//     end: "+=7500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// gsap.from(".f__slide", {
//     scrollTrigger: {
//         trigger: ".first__slide",
//     },
//     opacity: 0,
//     x: 100,
// });

// gsap.from(".first__container", {
//     scrollTrigger: {
//         trigger: ".first__slide",
//         markers: true,
//         pin: true,
//         pinSpacing: true,

//     },
//     opacity: 0,
//     x: 100,
// });

// gsap.from(".second", {
//     scrollTrigger: {
//         trigger: ".first",
//         // markers: true,
//         pin: true,
//         pinSpacing: true,
//         start: "bottom bottom",
//         end: "bottom bottom",
//     },

//     opacity: 0,
//     x: -100,
// });
