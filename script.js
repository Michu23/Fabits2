gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector(".open");
const navs = document.querySelector(".navs");
const header = document.querySelector(".headertag");
const close = document.querySelector(".close");
const pro = document.querySelector(".product__nav");
const nav__dropdown = document.querySelector(".product__nav__dropdown");

const play = document.querySelector(".playplace");
const play2 = document.querySelector(".playplace2");
const videocontainer = document.querySelector(".fabitsvideo");
const videocontainer2 = document.querySelector(".fabitsvideo2");
const video = document.querySelector(".thevideo");
const video2 = document.querySelector(".thevideo2");
const closee = document.querySelector(".closekaro");
const closee2 = document.querySelector(".closekaro2");

var mockup__desktop = gsap.timeline({
  repeat: -1,
});

mockup__desktop
  .from(
    ".content",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    0
  )
  .from(
    ".phone",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    0
  )
  .to(
    ".phone",
    {
      y: -500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    5
  )
  .to(
    ".content1",
    {
      y: -500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    5
  )
  .from(
    ".content2",
    {
      y: 500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    5
  )
  .from(
    ".phone2",
    {
      y: 500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    5
  )
  .to(
    ".phone2",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    5
  )

  .to(
    ".content2",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    5
  )
  .to(
    ".phone2",
    {
      y: -500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    10
  )

  .to(
    ".content2",
    {
      y: -500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    10
  )
  .from(
    ".content3",
    {
      y: 500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    10
  )
  .from(
    ".phone3",
    {
      y: 500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    10
  )
  .to(
    ".content3",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    15
  )
  .to(
    ".phone3",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    15
  )
  .to(
    ".phone3",
    {
      y: -500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    15
  )
  .to(
    ".content3",
    {
      y: -500,
      display: "none",
      ease: "ease.inOut(1.7)",
    },
    15
  )

  .from(
    ".content",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    15
  )
  .from(
    ".phone",
    {
      y: 0,
      display: "block",
      ease: "ease.inOut(1.7)",
    },
    15
  );

ScrollTrigger.create({
  animation: mockup__desktop,
  trigger: ".mockups",
  start: "top top",
  end: "+=2000",
  // markers: true,
});

gsap.from(".g1", {
  scrollTrigger: {
    trigger: ".gift__section",
    // markers: true,
    scrub: 1,
    start: "top+=800 center",
    end: "bottom center",
  },

  opacity: 0,
  x: -300,
});

gsap.from(".g3", {
  scrollTrigger: {
    trigger: ".gift__section",
    scrub: 1,
    start: "top+=800 center",
    end: "bottom top",
  },
  opacity: 0,
  x: 300,
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
  end: "+=5500",
  scrub: 1,
  pin: true,
  pinSpacing: true,
  // markers: true,
  anticipatePin: 1,
});

function pauseTheVideo() {
  console.log("pause");
  video.pause();
  video2.pause;
  if (video.paused) {
    video.currentTime = 0;
    video.play();
    video.muted = false;
  }
}

function playTheVideo() {
  video.play();
  video2.pause();
  video.muted = false;
  console.log("play");
}

function functionName() {
  video.muted = false;
}

const ff1 = gsap.timeline();

ScrollTrigger.create({
  animation: ff1,
  trigger: ".first__animation",
  start: "top top",
  end: "+=1000",
  scrub: true,
  pin: true,
  pinSpacing: true,
  anticipatePin: 0.1,
  // markers: true,
});

ff1
  .call(functionName, null)
  .to(
    ".fff3",
    {
      // x: -100,
      // opacity: 0,
      display: "none",
    },
    "=-0.1"
  )
  // call a function next before the next animation
  .call(pauseTheVideo, null)
  .from(
    ".fff2",
    {
      x: 0,
      // opacity: 0,
    },
    "=-0.1"
  )
  .to(
    ".fff2",
    {
      // x: 0,
      // opacity: 1,
      display: "none",
    },
    "=-0.1"
  )
  // .to(
  //   ".fff2",
  //   {
  //     x: -100,
  //     opacity: 0,
  //     'display': 'none',
  //   },
  //   "=-0.1"
  // )
  .from(
    ".ffff1",
    {
      x: 100,
      // opacity: 0,
    },
    "=-0.1"
  )
  .to(
    ".ffff1",
    {
      x: 0,
      opacity: 1,
    },
    "=-0.1"
  );

var b1 = gsap.timeline({
  defaults: {
    duration: 0.5,
    ease: "Back.easeOut.config(2)",
    opacity: 0,
  },
  scrollTrigger: {
    trigger: ".secure",
    start: "top-=100 top",
    end: "+=1",
    // markers: true,
  },
});

b1.from(".go1", {
  x: -10,
  transformOrigin: "left",
  delay: 0,
});

b1.from(".go2", {
  x: -10,
  transformOrigin: "left",
  delay: 0.1,
});

b1.from(".go3", {
  x: -10,
  transformOrigin: "left",
});

b1.from(".go4", {
  x: -10,
  transformOrigin: "left",
});

// const m = gsap.timeline();

// ScrollTrigger.create({
//   animation: m,
//   trigger: ".first__animation__mob",
//   start: "top top",
//   end: "+=1200",
//   scrub: 1,
//   pin: true,
//   pinSpacing: true,
//   anticipatePin: 1,
// });

// m.to(
//   ".m3",
//   {
//     x: -150,
//     opacity: 0,
//   },
//   "=-0.1"
// )
//   .from(
//     ".m2",
//     {
//       x: 150,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".m2",
//     {
//       x: 0,
//       opacity: 1,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".m2",
//     {
//       x: -150,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .from(
//     ".m1",
//     {
//       x: 150,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".m1",
//     {
//       x: 0,
//       opacity: 1,
//     },
//     "=-0.1"
//   );

// const bull = gsap.timeline();

// ScrollTrigger.create({
//   animation: bull,
//   trigger: ".first__animation",
//   start: "top top",
//   end: "+=3500",
//   scrub: 1,
//   pin: true,
//   pinSpacing: true,
//   anticipatePin: 1,
//   markers: true,
// });

const tl2 = gsap.timeline();

tl2
  .from(
    ".s11",
    {
      x: 100,
      opacity: 0,
    },
    "=-0.1"
  )
  .to(
    ".s11",
    {
      x: 100,
      opacity: 0,
    },
    "=-0.1"
  )
  .from(
    ".s22",
    {
      x: -100,
      opacity: 0,
    },
    "=-0.1"
  )
  .to(
    ".s22",
    {
      x: 0,
      opacity: 1,
    },
    "=-0.1"
  )
  .to(
    ".s22",
    {
      x: -100,
      opacity: 0,
    },
    "=-0.1"
  )
  .from(
    ".s33",
    {
      x: 100,
      opacity: 0,
    },
    "=-0.1"
  )
  .to(
    ".s33",
    {
      x: -100,
      opacity: 0,
    },
    "=-0.1"
  );

ScrollTrigger.create({
  animation: tl2,
  trigger: ".second__slide__mob",
  start: "top top",
  end: "+=2500",
  scrub: 1,
  pin: true,
  pinSpacing: true,
  anticipatePin: 1,
});

gsap.from(".i1", {
  scrollTrigger: {
    trigger: ".second__slide__mob",
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
    // markers: true,
  },
  opacity: 0,
  y: -1000,
  scale: 0.5,
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
    scrub: 0.3,
    start: "top bottom",
    end: "bottom bottom",
  },
  opacity: 0,
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
  y: -100,
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
  x: 100,
  duration: 3,
});

gsap.from(".whypara", {
  scrollTrigger: {
    trigger: ".why__container",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom bottom",
  },
  opacity: 0,
  scale: 0.9,
});

gsap.from(".grad11", {
  scrollTrigger: {
    trigger: ".why__container",
    scrub: 0.5,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  y: 30,
});
gsap.from(".grad22", {
  scrollTrigger: {
    trigger: ".why__container",
    scrub: 0.5,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  y: 30,
});

gsap.from(".grad33", {
  scrollTrigger: {
    trigger: ".why__container",
    scrub: 0.5,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  y: 30,
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
});

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

play.addEventListener("click", function () {
  videocontainer.classList.remove("d-none");
  video.play();
});

video.addEventListener("click", function () {
  function toggleMute() {
    video.muted = !video.muted;
  }
  toggleMute();
});

closee.addEventListener("click", function () {
  videocontainer.classList.add("d-none");
  video.pause();
});

play2.addEventListener("click", function () {
  videocontainer2.classList.remove("d-none");
  video2.play();
});

closee2.addEventListener("click", function () {
  videocontainer2.classList.add("d-none");
  video2.pause();
});

//  var clickFlag = 0;
//  $('body').on('click', function () {
//      if (clickFlag == 0) {
//          videocontainer.classList.add('d-none');
//      }
//      else {
//          clickFlag = 0;
//      }
//  });
//  $('body').on('click', '.playplace', function (event) {
//      clickFlag = 1;
//      videocontainer.classList.remove('d-none');
//  });

document.addEventListener("DOMContentLoaded", function () {
  onkeydown = function (e) {
    if (e.keyCode == 27) {
      videocontainer.classList.add("d-none");
      video.pause();
      videocontainer2.classList.add("d-none");
      video2.pause();
    }
  };
});

// const secure = gsap.timeline();

// secure.to(
//   ".secure__phone",
//   {
//     y: -150,
//     opacity: 0,
//   },
//   "=-0.1"
// );

// const mockup = gsap.timeline();
// mockup
//   .to(
//     ".phone",
//     {
//       y: -150,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".phone2",
//     {
//       y: -150,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".phone3",
//     {
//       y: 0,
//       opacity: 1,
//     },
//     "=-0.1"
//   );
