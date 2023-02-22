gsap.registerPlugin(ScrollTrigger);

const hamburger = document.querySelector(".open");
const navs = document.querySelector(".navs");
const header = document.querySelector(".headertag");
const close = document.querySelector(".close");
const pro = document.querySelector(".product__nav");
const nav__dropdown = document.querySelector(".product__nav__dropdown");

const video = document.querySelector(".thevideo");
const video2 = document.querySelector(".thevideo2");



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



function pauseTheVideo() {
  console.log("pause");
  video.pause();
  video2.pause();
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
});

ff1
  // .call(functionName, null)
  .to(
    ".fff3",
    {
      display: "none",
    },
    "=-0.1"
  )
  .call(pauseTheVideo, null)
  .from(
    ".fff2",
    {
      x: 0,
    },
    "=-0.1"
  )
  .to(
    ".fff2",
    {
      display: "none",
    },
    "=-0.1"
  )
  .from(
    ".ffff1",
    {
      x: 100,
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



// const tl2 = gsap.timeline();

// tl2
//   .from(
//     ".s11",
//     {
//       x: 0,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".s11",
//     {
//       x: 100,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .from(
//     ".s22",
//     {
//       x: -100,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".s22",
//     {
//       x: 0,
//       opacity: 1,
//     },
//     "=-0.1"
//   )
//   .to(
//     ".s22",
//     {
//       x: -100,
//       opacity: 0,
//     },
//     "=-0.1"
//   )
//   .from(
//     ".s33",
//     {
//       x: 100,
//       opacity: 0,
//     },
//     "=-0.1"
//   )

// ScrollTrigger.create({
//   animation: tl2,
//   trigger: ".second__slide__mob",
//   start: "top top",
//   end: "+=1500",
//   scrub: 1,
//   onLeave: function (self) {
//     let start = self.start;
//     self.scroll(self.start);
//     self.disable();
//     self.animation.progress(1);
//     ScrollTrigger.refresh();
//     window.scrollTo(0, start);
//   }
// });

const gs2 = gsap.timeline(
  {
    defaults: {
      duration: 2,
      ease: "Back.easeOut.config(2)",
      // repeat: 1,
      repeatDelay: 0.5,

    },
  },
   
)

gs2 
  .from(".s11", {
    x: 0,
  })
  .to(".s11", {
    opacity: 1,
  })
  .to(".s11", {
    opacity: 0,
  })
  .from(".s22", {
    opacity: 0,
  })
  .to(".s22", {
    opacity: 1,
  })

  .to(".s22", {
    opacity: 0,
  })
  .from(".s33", {
    opacity: 0,
  })
  .to(".s33", {
    opacity: 1,
  })


ScrollTrigger.create({
  animation: gs2,
  trigger: ".second__slide__mob",
  start: "top top",
  end: "+=2000",
  
});

  


gsap.from(".handimg", {
  scrollTrigger: {
    trigger: ".hand__section__dd",
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
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  y: -50,
});

gsap.from(".handimgg", {
  scrollTrigger: {
    trigger: ".hand__section__mob",
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
    scrub: 0.3,
    start: "top bottom",
    end: "bottom bottom",
  },
  opacity: 0,
  y: -50,
});

gsap.from(".handh", {
  scrollTrigger: {
    trigger: ".second_slide_pc",
    scrub: 1,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  y: -50,
});

gsap.from(".person1", {
  scrollTrigger: {
    trigger: ".customers",
    scrub: 4,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  x: -50,
});
gsap.from(".person2", {
  scrollTrigger: {
    trigger: ".customers",
    scrub: 4,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  y: 50,
});
gsap.from(".person3", {
  scrollTrigger: {
    trigger: ".customers",
    scrub: 4,
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 1,
  x: 50,
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


const product__nav = document.querySelector(".product__nav");

hamburger.addEventListener("click", () => {
  navs.classList.toggle("d-none");
  close.classList.toggle("d-none");
  hamburger.classList.toggle("d-none");
});

close.addEventListener("click", () => {
  navs.classList.toggle("d-none");
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


gsap.from(".slide", {
  duration: 2,
  scale: 0.5, 
  scrollTrigger: {
    trigger: ".partners",
    start: "top center",
  // markers: true,

  },
  opacity: 0, 
  delay: 0.5, 
  stagger: 0.2,
  ease: "elastic", 
  force3D: true
});

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("click", function() {
    gsap.to(".box", {
      duration: 0.5, 
      opacity: 0, 
      scrollTrigger: {
        trigger: ".partners",
        start: "top center",
        // markers: true,
      },
      y: -100, 
      stagger: 0.1,
      ease: "back.in"
    });
  });
});

const blob = document.getElementById("blob");

document.body.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

